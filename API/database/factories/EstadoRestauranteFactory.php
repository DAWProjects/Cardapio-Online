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

$factory->define(App\EstadoRestaurante::class, function (Faker\Generator $faker) {

    return [
        'designacao' => $faker->word,
        'descricao' => $faker->text
    ];
});