<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Models\ChatRoom;
use Auth;
use Validator;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $room = ChatRoom::where('participant_id', Auth::id())->first();

      $chats = $room->getChat;

      return $chats;
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
          'message' => 'string|max:200',
      ]);

      if($validator->fails()) {
        return $validator->messages();
        return response()->json(['message' => $validator->messages()->get('*')], 500);
      }

      $chat_room = ChatRoom::where('participant_id', Auth::id())->first();
      if(!$chat_room) {
        $chat_room = ChatRoom::create([
          'participant_id' => Auth::id(),
        ]);
      }

      Chat::create([
        'user_id' => Auth::id(),
        'message' => $request->input('message'),
        'room_id' => $chat_room->id,
      ]);

      return response()->json(['message' => 'ok'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chat  $chat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chat $chat)
    {
        //
    }
}
