<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRestaurantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurantes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('telefone');
            $table->string('email');
            $table->string('cidade');
            $table->string('av_rua');
            $table->integer('numero')->nullable();
            $table->float('latitude')->nullable();
            $table->float('longitude')->nullable();
            $table->string('cardapio_img')->nullable();
            $table->string('logo_img');
            $table->string('imagem')->nullable();
            $table->softDeletes();
//           $table->integer('user_id')->unsigned();
//           $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')
//               ->onUpdate('cascade');
           $table->integer('estado_id')->unsigned();
           $table->foreign('estado_id')->references('id')->on('estado_restaurantes')->onDelete('cascade')
               ->onUpdate('cascade');
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
        Schema::dropIfExists('restaurantes');
    }
}
