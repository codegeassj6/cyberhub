<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\CommentLike;
use Auth;
use Validator;

class CommentLikeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:comments,id'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $comment = Comment::whereId($request->input('id'))->first();

        $comment_like = CommentLike::where([
            'comment_id' => $comment->id,
            'user_id' => Auth::id(),
        ])->first();


        if($comment_like) {
            return $this->destroy($comment_like);
        }

        CommentLike::create([
             'user_id' => Auth::id(),
             'comment_id' => $comment->id,
        ]);

        return response()->json(['message' => ''], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CommentLike $comment_like)
    {
        $comment_like->delete();
        return response()->json(['message' => 'destroy'], 200);
    }
}
