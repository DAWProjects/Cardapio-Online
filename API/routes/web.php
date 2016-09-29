<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('todos-admins', 'AdministradorController@index')->middleware('cors');
Route::post('criar-admin', 'AdministradorController@store')->middleware('cors');
Route::get('ver-admin/{id}', 'AdministradorController@show')->middleware('cors');
Route::put('todos-admins/{id}', 'AdministradorController@update')->middleware('cors');
Route::delete('apagar-admin/{id}', 'AdministradorController@delete')->middleware('cors');

Route::get('todos-consumidores', 'ConsumidorController@index')->middleware('cors');
Route::post('criar-consumidor', 'ConsumidorController@store')->middleware('cors');
Route::get('ver-consumidor/{id}', 'ConsumidorController@show')->middleware('cors');
Route::put('todos-consumidores/{id}', 'ConsumidorController2@update')->middleware('cors');
Route::delete('apagar-consumidor/{id}', 'ConsumidorController@delete')->middleware('cors');

Route::get('todos-estados-consumidor', 'EstadoConsumidorController@index')->middleware('cors');
Route::post('criar-estado-consumidor', 'EstadoConsumidorController@store')->middleware('cors');
Route::get('ver-estado-consumidor/{id}', 'EstadoConsumidorController@show')->middleware('cors');
Route::put('todos-estados-consumidor/{id}', 'EstadoConsumidorController@update')->middleware('cors');
Route::delete('apagar-estado-consumidor/{id}', 'EstadoConsumidorController@delete')->middleware('cors');

Route::get('todos-estados-restaurantes', 'EstadoRestauranteController@index')->middleware('cors');
Route::post('criar-estado-restaurantes', 'EstadoRestauranteController@store')->middleware('cors');
Route::get('ver-estado-restaurantes/{id}', 'EstadoRestauranteController@show')->middleware('cors');
Route::put('todos-estados-restaurantes/{id}', 'EstadoRestauranteController@update')->middleware('cors');
Route::delete('apagar-estado-restaurantes/{id}', 'EstadoRestauranteController@delete')->middleware('cors');

Route::get('todas-refeicoes', 'RefeicaoController@index')->middleware('cors');
Route::post('criar-refeicao', 'RefeicaoController@store')->middleware('cors');
Route::get('ver-refeicao/{id}', 'RefeicaoController@show')->middleware('cors');
Route::put('todas-refeicoes/{id}', 'RefeicaoController@update')->middleware('cors');
Route::delete('apagar-refeicao/{id}', 'RefeicaoController@delete')->middleware('cors');

Route::get('todos-restaurantes', 'RestauranteController@index')->middleware('cors');
Route::post('criar-restaurantes', 'RestauranteController@store')->middleware('cors');
Route::get('ver-restaurantes/{id}', 'RestauranteController@show')->middleware('cors');
Route::put('todos-restaurantes/{id}', 'RestauranteController@update')->middleware('cors');
Route::delete('apagar-restaurantes/{id}', 'RestauranteController@delete')->middleware('cors');

Route::get('todos-tipos-refeicao', 'TipoRefeicaoController@index')->middleware('cors');
Route::post('criar-tipo-refeicao', 'TipoRefeicaoController@store')->middleware('cors');
Route::get('ver-tipo-refeicao/{id}', 'TipoRefeicaoController@show')->middleware('cors');
Route::put('todos-tipos-refeicao/{id}', 'TipoRefeicaoController@update')->middleware('cors');
Route::delete('apagar-tipo-refeicao/{id}', 'TipoRefeicaoController@delete')->middleware('cors');

Route::get('todos-menus', 'MenuController@index')->middleware('cors');
Route::post('criar-menu', 'MenuController@store')->middleware('cors');
Route::get('ver-menu/{id}', 'MenuController@show')->middleware('cors');
Route::put('todos-menu/{id}', 'MenuController@update')->middleware('cors');
Route::delete('apagar-menu/{id}', 'MenuController@delete')->middleware('cors');

//Route::resource('admin', 'AdministradorController')->middleware('cors');
//Route::resource('consumidor', 'ConsumidorController')->middleware('cors');
//Route::resource('estado-consumidor', 'EstadoConsumidorController')->middleware('cors');
//Route::resource('estado-restaurante', 'EstadoRestauranteController')->middleware('cors');
//Route::resource('refeicao', 'RefeicaoController')->middleware('cors');
//Route::resource('restaurante', 'RestauranteController')->middleware('cors');
//Route::resource('tipo-refeicao', 'TipoRefeicaoController')->middleware('cors');


