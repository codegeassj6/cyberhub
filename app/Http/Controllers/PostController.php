<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use DB;
use Auth;
use Str;
use Validator;
use App\Models\PostAttachment;
use Storage;
use Carbon;

class PostController extends Controller
{
    public function index(Request $request)
    {
        if($request->input('sort')) {
            $post = Post::orderBy('created_at', $request->input('sort'))->paginate(5);
        } else {
            $post = Post::orderBy('created_at', 'desc')->paginate(5);
        }


        $post->getCollection()->transform(function($value) {
            $value->getUser;
            $value->created_time = Carbon::create($value->created_at)->toDayDateTimeString();
            $value->getAttachImages;
            $value->getPostLikes;

            if($value->getPostLikes) {
                $value->authLikes = $value->getPostLikes->where('user_id', Auth::id())->first() ? 1 : 0;
            } else {
                $value->authLikes = 0;
            }

            return $value;
        });

        return $post;
    }

    public function show($id)
    {
        $post = Post::whereId($id)->paginate(1);
        // $post->getUser;
        // $post->created_time = Carbon::create($post->created_at)->toDayDateTimeString();
        // $post->getAttachImages;
        // $post->getPostLikes;
        $post->getCollection()->transform(function($value) {
            $value->getUser;
            $value->created_time = Carbon::create($value->created_at)->toDayDateTimeString();
            $value->getAttachImages;
            $value->getPostLikes;
            return $value;
        });


        return $post;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'string|max:1000',
            'image.*' => 'mimes:jpg,jpeg,png,bmp',
            [
                'image.*.mimes' => 'Only jpeg, png and bmp images are allowed',
                'image.*.max' => 'Sorry! Maximum allowed size for an image is 20MB',
            ]
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $post = Post::create([
            'user_id' => Auth::user()->id,
            'message' => trim($request->input('message')),
        ]);

        if($request->file('image')) {
            for ($i=0; $i < count($request->file('image')); $i++) {
                Storage::disk('local')->putFileAs('/public/post/img', $request->file('image')[$i], $request->file('image')[$i]->hashName());
                PostAttachment::create([
                   'post_id' =>  $post->id,
                   'image_link' => $request->file('image')[$i]->hashName(),
                ]);
            }
        }

        return $this->index();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            // 'id' => 'required',
            'message' => 'string',
            'image.*' => 'integer|exists:post_images,id',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $post = Post::where([
            'id' => $id,
            'user_id' => Auth::id(),
            ])->firstOrFail();

        if($request->input('image')) {
            $attachments = $post->getAttachImages->whereIn('id', $request->input('image'));
            foreach ($attachments as $attachment) {
                Storage::disk('local')->delete('public/post/img/'.$attachment->image_link);
                $attachment->delete();
            }
        }

        $post->update([
           'message' => trim($request->input('message'))
        ]);

        return response()->json(['message' => $request->input('message')], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::whereId($id)->firstOrFail();
        if($post->user_id != Auth::id()) {
            return response()->json(['message' => 'Invalid action'], 500);
        }

        if($post->getPostLikes) {
            foreach($post->getPostLikes as $like) {
                $like->delete();
            }
        }

        if($post->getComments) {
            foreach($post->getComments as $comment) {
                $comment->delete();
            }
        }

        if($post->getAttachImages) {
            foreach($post->getAttachImages as $image) {
                Storage::disk('local')->delete('public/post/img/'.$image->image_link);
                $image->delete();
            }
        }

        $post->delete();
        return response()->json(['message' => ''], 200);
    }
}
