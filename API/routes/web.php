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
Route::put('todos-consumidores/{id}', 'ConsumidorController@update')->middleware('cors');
Route::delete('apagar-consumidor/{id}', 'ConsumidorController@delete')->middleware('cors');

Route::get('todos-estados-consumidor', 'EstadoConsumidorController@index')->middleware('cors');
Route::post('criar-estado-consumidor', 'EstadoConsumidorController@store')->middleware('cors');
Route::get('ver-estado-consumidor/{id}', 'EstadoConsumidorController@show')->middleware('cors');
Route::put('todos-estados-consumidor/{id}', 'EstadoConsumidorController@update')->middleware('cors');
Route::delete('apagar-estado-consumidor/{id}', 'EstadoConsumidorController@delete')->middleware('cors');

Route::get('todos-estados-restaurante', 'EstadoRestauranteController@index')->middleware('cors');
Route::post('criar-estado-restaurante', 'EstadoRestauranteController@store')->middleware('cors');
Route::get('ver-estado-restaurante/{id}', 'EstadoRestauranteController@show')->middleware('cors');
Route::put('todos-estados-restaurante/{id}', 'EstadoRestauranteController@update')->middleware('cors');
Route::delete('apagar-estado-restaurante/{id}', 'EstadoRestauranteController@delete')->middleware('cors');

Route::get('todas-refeicoes', 'RefeicaoController@index')->middleware('cors');
Route::post('criar-refeicao', 'RefeicaoController@store')->middleware('cors');
Route::get('ver-refeicao/{id}', 'RefeicaoController@show')->middleware('cors');
Route::put('todas-refeicoes/{id}', 'RefeicaoController@update')->middleware('cors');
Route::delete('apagar-refeicao/{id}', 'RefeicaoController@delete')->middleware('cors');

Route::get('todos-restaurantes', 'RestauranteController@index')->middleware('cors');
Route::post('criar-restaurante', 'RestauranteController@store')->middleware('cors');
Route::get('ver-restaurante/{id}', 'RestauranteController@show')->middleware('cors');
Route::put('todos-restaurantes/{id}', 'RestauranteController@update')->middleware('cors');
Route::delete('apagar-restaurante/{id}', 'RestauranteController@delete')->middleware('cors');

Route::get('todos-tipos-refeicao', 'TipoRefeicaoController@index')->middleware('cors');
Route::post('criar-tipo-refeicao', 'TipoRefeicaoController@store')->middleware('cors');
Route::get('ver-tipo-refeicao/{id}', 'TipoRefeicaoController@show')->middleware('cors');
Route::put('todos-tipos-refeicao/{id}', 'TipoRefeicaoController@update')->middleware('cors');
Route::delete('apagar-tipo-refeicao/{id}', 'TipoRefeicaoController@delete')->middleware('cors');


