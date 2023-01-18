<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::get('me', 'App\Http\Controllers\AuthController@me');
});

Route::group(['prefix' => 'post'], function ($router) {
    Route::get('/', 'App\Http\Controllers\PostController@index')->middleware('auth');
    Route::post('/store', 'App\Http\Controllers\PostController@store')->middleware('auth');
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

Route::group(['prefix' => 'order'], function ($router) {
    Route::post('/store', 'App\Http\Controllers\OrderController@store')->middleware('auth');
});
