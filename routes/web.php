<?php

use Illuminate\Support\Facades\Route;
// use Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group(['prefix' => 'oauth'], function ($router) {
//     Route::get('/login/facebook', 'App\Http\Controllers\OAuthController@redirectToFacebook')->name('login.facebook');
//     Route::get('/login/facebook/callback', 'App\Http\Controllers\OAuthController@handleFacebookCallback');
//     Route::get('/login/google', 'App\Http\Controllers\OAuthController@store')->name('login.google');
//     Route::get('/login/google/callback', 'App\Http\Controllers\OAuthController@store');
// });

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

