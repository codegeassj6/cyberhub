<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Socialite;
use App\Models\User;
use Auth;

class OAuthController extends Controller
{
    public function redirectToProvider($provider) {
        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function handleProviderCallback() {
        $fb_user = Socialite::driver('facebook')->stateless()->user();
        $user = $this->loginOrRegister($fb_user);

        return $user;
    }

    public function loginOrRegister($fb_user) {
        $user = User::where('email', $fb_user->email)->first();
        if(!$user) {
            User::create([
                'first_name' => $fb_user->user['first_name'],
                'last_name' => $fb_user->user['last_name'],
                'email' => $fb_user->email,
                'provider_id' => $fb_user->id,
                'profile_img' => $fb_user->avatar,
            ]);
            $user = User::where('email', $fb_user->email)->first();
        }
        Auth::login($user);
        return Auth::user();
    }
}
