<?php

use Illuminate\Database\Seeder;

class RestaurantesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Restaurante::class, 10)->create()->each(function($r) {
            for ($i = 0; $i < 9; $i++){
            $r->refeicaos()->save(factory(App\Refeicao::class)->create(), ['preco' => 250,'imagem'=>'img-rest.jpg']);
            }
        });

    }
}
