<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your user factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default user should look.
|
*/

$factory->define(App\Restaurante::class, function (Faker\Generator $faker) {

    return [
        'nome' => $faker->name,
        'email' => $faker->safeEmail,
        'telefone' => $faker->phoneNumber,
        'cidade' => $faker->city,
        'av_rua' => $faker->streetAddress,
        'numero' => $faker->buildingNumber,
        'lat' => $faker->latitude,
        'long' => $faker->longitude,
        'imagem' => 'img-rest-'.$faker->numberBetween(1,7).'.jpg',
        'logo_img' => 'logo-rest.jpg',
        'estado_id' => 1
    ];
});