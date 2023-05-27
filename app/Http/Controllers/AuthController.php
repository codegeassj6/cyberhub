<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Validator;
use App\Models\User;
use Hash;
use Validation;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'loginAsModerator']]);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login($token = null)
    {
        $credentials = request(['email', 'password']);

        if($credentials) {
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        if(Auth::check()) {
            return $this->respondWithToken($token);
        }
    }

    public function loginAsModerator($token = null)
    {
        $credentials = request(['email', 'password']);
        if($credentials) {
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        }

        if(Auth::user()->role > 0) {
            return $this->respondWithToken($token);
        } else {
          Auth::logout();
          return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            // 'user' => $this->guard()->user(),
            'user' => Auth::user(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function guard() {
        return \Auth::guard('api');
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'min:2|max:20|string|required',
            'last_name' => 'min:2|max:20|string|required',
            'email' => 'email:rfc,dns|required|unique:users,email|max:32',
            'password' => 'min:6|max:20|required',
            'confirm' => 'same:password|required'
        ]);
        if($validator->fails()) {
            return response()->json($validator->messages()->get('*'), 500);
        }

        User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return response()->json(['' => ''], 200);

    }

}
