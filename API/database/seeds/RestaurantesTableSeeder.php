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
        factory(App\TipoRefeicao::class, 2)->create();
        factory(App\EstadoRestaurante::class, 2)->create();

        factory(App\User::class, 10)->create()->each(function ($u) {

            factory(App\Restaurante::class)->create(['user_id' => $u->id])->each(function ($r) {
                for ($i = 0; $i < 9; $i++) {
                    $r->refeicaos()->save(factory(App\Refeicao::class)->create(), ['preco' => rand(100.00, 1500.99), 'imagem' => 'img-rest.jpg', 'descricao' => 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum']);
                }
            });

        });

    }
}
