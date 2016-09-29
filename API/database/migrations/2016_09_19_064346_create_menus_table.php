<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('menus', function (Blueprint $table){

            $table->integer('refeicao_id')->unsigned();
            $table->foreign('refeicao_id')->references('id')->on('refeicaos')->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('restaurante_id')->unsigned();
            $table->foreign('restaurante_id')->references('id')->on('restaurantes')->onDelete('cascade')
                ->onUpdate('cascade');

            $table->double('preco');
            $table->string('descricao');
            $table->time('hora_inicio')->nullable();
            $table->time('hora_fim')->nullable();
            $table->string('imagem');
            $table->softDeletes();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
