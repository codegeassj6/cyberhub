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

Route::group(['prefix' => 'test'], function ($router) {
    Route::post('/', 'App\Http\Controllers\TestController@store');
});

Route::group(['prefix' => 'post'], function ($router) {
    Route::get('/', 'App\Http\Controllers\PostController@index')->middleware('auth');
    Route::post('/', 'App\Http\Controllers\PostController@store')->middleware('auth');
    Route::get('/show/{id}', 'App\Http\Controllers\PostController@show')->middleware('auth');
    Route::patch('/{id}', 'App\Http\Controllers\PostController@update')->middleware('auth');
    Route::delete('/{id}', 'App\Http\Controllers\PostController@destroy')->middleware('auth');

    // PostLike section
    Route::post('/like', 'App\Http\Controllers\PostLikeController@store')->middleware('auth');
});

Route::group(['prefix' => 'comment'], function ($router) {
    Route::get('/', 'App\Http\Controllers\CommentController@index')->middleware('auth');
    Route::post('/', 'App\Http\Controllers\CommentController@store')->middleware('auth');
    Route::patch('/{id}', 'App\Http\Controllers\CommentController@update')->middleware('auth');
    Route::delete('/{id}', 'App\Http\Controllers\CommentController@destroy')->middleware('auth');


    // CommentLike section
    Route::post('/like', 'App\Http\Controllers\CommentLikeController@store')->middleware('auth');
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
    Route::get('/', 'App\Http\Controllers\CartController@index')->middleware('auth');
    Route::post('/', 'App\Http\Controllers\CartController@store')->middleware('auth');
    Route::delete('/{id}', 'App\Http\Controllers\CartController@destroy')->middleware('auth');
    Route::patch('/{id}', 'App\Http\Controllers\CartController@update')->middleware('auth');
});

Route::group(['prefix' => 'order'], function ($router) {
    Route::post('/', 'App\Http\Controllers\OrderController@store');
});

Route::group(['prefix' => 'save'], function ($router) {
    Route::get('/', 'App\Http\Controllers\SaveController@index')->middleware('auth');
    Route::post('/', 'App\Http\Controllers\SaveController@store')->middleware('auth');
    Route::get('/{id}', 'App\Http\Controllers\SaveController@show')->middleware('auth');
    Route::delete('/{id}', 'App\Http\Controllers\SaveController@destroy')->middleware('auth');
});

Route::group(['prefix' => 'oauth'], function ($router) {
    Route::get('/login/redirect/{provider}', 'App\Http\Controllers\OAuthController@redirectToProvider');
    Route::get('/login/callback/{provider}', 'App\Http\Controllers\OAuthController@handleProviderCallback');
});

Route::group(['prefix' => 'payment'], function ($router) {
    Route::get('/', 'App\Http\Controllers\PaymentController@index');
});
