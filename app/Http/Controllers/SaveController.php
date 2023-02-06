<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameSave;
use Validator;
use Storage;
use Auth;
use Carbon;
use DB;
use Str;

class SaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $saves = DB::table('game_saves')->where('user_id', Auth::id())->orderBy('created_at', 'desc')->get();
        $saves = $saves->transform(function($value) {
            $value->created_at = Carbon::create($value->created_at)->toDayDateTimeString();
            return $value;
        });
        return $saves;
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
            'file' => 'file|mimes:zip,rar,7zip'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        Storage::disk('local')
            ->putFileAs('/public/user/'.Auth::user()->id . '/saves', $request->file('file') , $request->file('file')->getClientOriginalName(), 'public');

        GameSave::create([
            'user_id' => Auth::id(),
            'file_name' => $request->file('file')->getClientOriginalName(),
            'file_size' => $request->file('file')->getSize() / 1000 ,
        ]);

        return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $save = GameSave::where([
            'user_id' => Auth::id(),
            'id' => $id,
        ])->firstOrFail();

        return Storage::download('/public/user/'.Auth::id().'/saves/'. $save->file_name);
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
    public function destroy($id)
    {
        $save = GameSave::where([
            'user_id' => Auth::id(),
            'id' => $id,
        ])->firstOrFail();

        $save->delete();
    }
}
