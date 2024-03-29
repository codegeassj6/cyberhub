<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('login/moderator', 'App\Http\Controllers\AuthController@loginAsModerator');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthController@me');
});

Route::group(['prefix' => 'reset'], function ($router) {
  Route::patch('/password', 'App\Http\Controllers\ResetPasswordController@update');
  Route::post('/password/request', 'App\Http\Controllers\ResetPasswordController@store');
  Route::get('/password/{token}', 'App\Http\Controllers\ResetPasswordController@show');
});

Route::group(['prefix' => 'post'], function ($router) {
    Route::get('/', 'App\Http\Controllers\PostController@index');
    // Route::post('/', 'App\Http\Controllers\PostController@store')->middleware('auth:api');
    Route::get('/show/{id}', 'App\Http\Controllers\PostController@show')->middleware('auth:api');
    Route::patch('/{id}', 'App\Http\Controllers\PostController@update')->middleware('auth:api');
    Route::delete('/{id}', 'App\Http\Controllers\PostController@destroy')->middleware('auth:api');

    // PostLike section
    Route::post('/like', 'App\Http\Controllers\PostLikeController@store')->middleware('auth:api');
});

Route::group(['prefix' => 'comment'], function ($router) {
    Route::get('/', 'App\Http\Controllers\CommentController@index')->middleware('auth:api');
    Route::post('/', 'App\Http\Controllers\CommentController@store')->middleware('auth:api');
    Route::patch('/{id}', 'App\Http\Controllers\CommentController@update')->middleware('auth:api');
    Route::delete('/{id}', 'App\Http\Controllers\CommentController@destroy')->middleware('auth:api');


    // CommentLike section
    Route::post('/like', 'App\Http\Controllers\CommentLikeController@store')->middleware('auth:api');
});

Route::group(['prefix' => 'games'], function ($router) {
    Route::get('/', 'App\Http\Controllers\GameController@index');
});

Route::group(['prefix' => 'account'], function ($router) {
    Route::post('/update', 'App\Http\Controllers\AccountController@update');
    Route::post('/update/image', 'App\Http\Controllers\AccountController@updateImage');
});

Route::group(['prefix' => 'product'], function ($router) {
    Route::get('/', 'App\Http\Controllers\ProductController@index');
});

Route::group(['prefix' => 'cart'], function ($router) {
    Route::get('/', 'App\Http\Controllers\CartController@index')->middleware('auth:api');
    Route::post('/', 'App\Http\Controllers\CartController@store')->middleware('auth:api');
    Route::delete('/{id}', 'App\Http\Controllers\CartController@destroy')->middleware('auth:api');
    Route::patch('/{id}', 'App\Http\Controllers\CartController@update')->middleware('auth:api');
});

Route::group(['prefix' => 'order'], function ($router) {
    Route::post('/', 'App\Http\Controllers\OrderController@store');
});

Route::group(['prefix' => 'save'], function ($router) {
    Route::get('/', 'App\Http\Controllers\SaveController@index')->middleware('auth:api');
    Route::post('/', 'App\Http\Controllers\SaveController@store')->middleware('auth:api');
    Route::get('/{id}', 'App\Http\Controllers\SaveController@show')->middleware('auth:api');
    Route::delete('/{id}', 'App\Http\Controllers\SaveController@destroy')->middleware('auth:api');
});

Route::group(['prefix' => 'chat'], function ($router) {
  Route::get('/', 'App\Http\Controllers\ChatController@index')->middleware('auth:api');
  Route::post('/', 'App\Http\Controllers\ChatController@store')->middleware('auth:api');
});

Route::group(['prefix' => 'oauth'], function ($router) {
    Route::get('/login/redirect/{provider}', 'App\Http\Controllers\OAuthController@redirectToProvider');
    Route::get('/login/callback/{provider}', 'App\Http\Controllers\OAuthController@handleProviderCallback');
});

Route::group(['prefix' => 'payment'], function ($router) {
    Route::get('/', 'App\Http\Controllers\PaymentController@index');
});

Route::group(['prefix' => 'chat/room'], function ($router) {
    Route::get('/show', 'App\Http\Controllers\ChatRoomController@show')->middleware('auth:api');
});
