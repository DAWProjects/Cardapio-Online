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

$factory->define(App\User::class, function (Faker\Generator $faker) {

    return [
        'email' => $faker->safeEmail,
        'tipo' => 'restaurante',
        'password' => 'minhasenha',
        'remember_token' => str_random(10),

    ];
});