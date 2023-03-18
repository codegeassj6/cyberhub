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
    public function index()
    {
        $post = Post::orderBy('created_at', 'desc')->paginate(5);
        $post->getCollection()->transform(function($value) {
            $value->getUser;
            $value->created_time = Carbon::create($value->created_at)->toDayDateTimeString();
            $value->getAttachFiles;
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
        // $post = Post::whereId($id)->first();
        // $post->getUser;
        // $post->created_time = Carbon::create($post->created_at)->toDayDateTimeString();
        // $post->getAttachFiles;
        // $post->getPostLikes;

        $post = Post::whereId($id)->paginate(1);
        $post->getCollection()->transform(function($value) {
            $value->getUser;
            $value->created_time = Carbon::create($value->created_at)->toDayDateTimeString();
            $value->getAttachFiles;
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'string|max:1000',
            'files' => 'max:6', [
                'files.max' => 'Only 6 files allowed!',
            ],
            'files.*' => 'mimes:jpg,jpeg,png,bmp,mp4',
            [
                'files.*.mimes' => 'Only jpeg, png and bmp images are allowed',
            ]
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $post = Post::create([
            'user_id' => Auth::user()->id,
            'message' => trim($request->input('message')),
        ]);

        if($request->file('files')) {
            for ($i=0; $i < count($request->file('files')); $i++) {
                Storage::disk('local')->putFileAs('/public/post/file', $request->file('files')[$i], $request->file('files')[$i]->hashName());
                PostAttachment::create([
                   'post_id' =>  $post->id,
                   'file_link' => $request->file('files')[$i]->hashName(),
                ]);
            }
        }

        return $this->index();
    }

    public function edit(Request $request) {

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
            'message' => 'string',
            // 'files.*' => 'exists:post_images,id',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $post = Post::where([
            'id' => $id,
            'user_id' => Auth::id(),
            ])->firstOrFail();

        if($request->input('files')) {
            $attachments = $post->getAttachFiles->whereIn('id', $request->input('files'));
            foreach ($attachments as $attachment) {
                Storage::disk('local')->delete('public/post/file/'.$attachment->file_link);
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

        if($post->getAttachFiles) {
            foreach($post->getAttachFiles as $file) {
                Storage::disk('local')->delete('public/post/file/'.$file->file_link);
                $file->delete();
            }
        }

        $post->delete();
        return response()->json(['message' => ''], 200);
    }
}
