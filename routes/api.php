<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');

Route::resource('employees', EmployeeController::class);

Route::group([
    'middleware' => 'auth:api'
], function () {

    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');
    Route::put('user/update', 'UserController@update');
    Route::get('products', 'ProductController@products');
    Route::post('product/add', 'ProductController@add');
    Route::post('product/update/{id}', 'ProductController@update');
    Route::get('carts', 'CartController@products');
    Route::get('carts/checkout', 'CartController@checkout');
    Route::get('carts/add/{id}', 'CartController@add');

});

Route::group([
    'middleware' => 'custom.auth.basic'
], function () {
    Route::delete('product/delete/{id}', 'ProductController@delete');
});
