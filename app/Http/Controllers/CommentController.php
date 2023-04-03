<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Auth;
use Validator;
use App\Models\Post;
use App\Models\User;
use Carbon;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $post = Post::where('id', $request->input('post_id'))->firstOrFail();
        if($request->input('sort') == 'latest') {
            $comments = $post->getComments()->orderBy('created_at', 'desc')->paginate(4);
        } elseif($request->input('sort') == 'oldest') {
            $comments = $post->getComments()->paginate(4);
        } else {
            $comments = $post->getComments()->orderBy('created_at', 'desc')->paginate(4);
        }

        $comments->transform(function($value) {
            $value->user_details = User::where('id', $value->user_id)->first();
            $value->getCommentLikes;
            if($value->getCommentLikes) {
                $value->authLikes = $value->getCommentLikes->where('user_id', Auth::id())->first() ? 1 : 0;
            } else {
                $value->authLikes = 0;
            }
            $value->edit_mode = 0;

            $value->created_time = Carbon::create($value->created_at)->toDayDateTimeString();

            return $value;
        });

        return $comments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'post_id' => 'integer|exists:posts,id|required',
            'comment' => 'string|required|max:200',
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $comment = Comment::create([
           'post_id' => $request->input('post_id'),
           'user_id' => Auth::id(),
           'message' => $request->input('comment')
        ]);

        $comment->user_details = Auth::user();
        $comment->authLikes = 0;
        $comment->edit_mode = 0;
        return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentRequest  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|string'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $comment = Comment::whereId($id)->where('user_id', Auth::id())->firstOrFail();
        $comment->update([
            'message' => $request->input('message')
        ]);

        return $comment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::whereId($id)->firstOrFail();
        if($comment->user_id == Auth::id() || Auth::user()->role == 1) {
          $comment->getCommentLikes()->delete();
          $comment->delete();
          return response()->json(['message' => 'deleted'], 200);
        }

    }
}
