<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Auth;
use Validator;
use App\Models\Post;
use App\Models\User;

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
        $comments = $post->getComments;
        $comments->transform(function($value) {
            $value->user_details = User::where('id', $value->user_id)->first();
            $value->getCommentLikes;
            if($value->getCommentLikes) {
                $value->authLikes = $value->getCommentLikes->where('user_id', Auth::id())->first() ? true : false;
            } else {
                $value->authLikes = false;
            }

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

        Comment::create([
           'post_id' => $request->input('post_id'),
           'user_id' => Auth::id(),
           'message' => $request->input('comment')
        ]);

        $comment->user_details = Auth::user();

        return response()->json($comment, 200);
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
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json(['message' => 'deleted'], 200);
    }
}
