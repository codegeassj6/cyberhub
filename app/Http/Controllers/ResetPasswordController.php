<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Str;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\ResetPassword;
use App\Mail\ResetPasswordMail;
use Mail;

class ResetPasswordController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['store']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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
            'email' => 'email:rfc,dns|required|exists:users,email'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => $validator->messages()->get('*')], 500);
        }

        $reset_request = ResetPassword::where('email', $request->input('email'))->first();


        if($reset_request) {
            $reset_request->update([
                'access_token' => uniqid().'_'. Str::random(10),
            ]);
        } else {
            ResetPassword::create([
                'email' => $request->input('email'),
                'access_token' => uniqid().'_'. Str::random(10),
            ]);
        }
        Mail::to('j6cafe2018@gmail.com')->send(new ResetPasswordMail);

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
        //
    }
}
