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

Route::group(['prefix' => 'web'], function ($router) {
    Route::get('/oauth/login/redirect/{provider}', 'App\Http\Controllers\OAuthController@redirectToProvider');
    Route::get('/oauth/login/callback/{provider}', 'App\Http\Controllers\OAuthController@handleProviderCallback');
});

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

