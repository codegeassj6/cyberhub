<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Socialite;
use App\Models\User;
use Auth;
use App\Http\Controllers\AuthController;
use JWTAuth;

class OAuthController extends Controller
{
    public function redirectToProvider($provider) {
        $url = Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();
        return response()->json(['url' => $url], 200);

        // return Socialite::driver($provider)->stateless()->redirect();
    }

    public function handleProviderCallback($provider) {
        $provider_user = Socialite::driver($provider)
            ->stateless()
            ->fields(['first_name', 'last_name', 'email', 'gender', 'birthday'])
            ->user();

        $user = $this->loginOrRegister($provider_user);
        if(Auth::check()) {
            $token = JWTAuth::fromUser($user);
            $auth_controller = new AuthController;
            return $auth_controller->login($token);
        }

        // return response()->json(['access_token' => $provider_user->token], 200);
    }

    public function loginOrRegister($provider_user) {
        $user = User::where('email', $provider_user->email)->first();
        if(!$user) {
            User::create([
                'first_name' => $provider_user->user['first_name'],
                'last_name' => $provider_user->user['last_name'],
                'email' => $provider_user->email,
                'provider_id' => $provider_user->id,
                'profile_img' => $provider_user->avatar,
            ]);
            $user = User::where('email', $provider_user->email)->firstOrFail();
        }
        Auth::login($user);
        return $user;
    }
}
