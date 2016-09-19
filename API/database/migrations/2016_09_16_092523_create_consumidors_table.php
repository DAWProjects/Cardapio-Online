<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsumidorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consumidors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->char('sexo');
            $table->string('telefone')->nullale();
            $table->softDeletes();
//           $table->integer('user_id')->unsigned();
//           $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')
//               ->onUpdate('cascade');
           $table->integer('estado_id')->unsigned();
           $table->foreign('estado_id')->references('id')->on('estado_consumidors')->onDelete('cascade')
               ->onUpdate('cascade');
            $table->timestamps();
        });

        Schema::create('rate_restaurante', function (Blueprint $table){

            $table->integer('restaurante_id')->unsigned();
            $table->foreign('restaurante_id')->references('id')->on('restaurantes')->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('consumidor_id')->unsigned();
            $table->foreign('consumidor_id')->references('id')->on('consumidors')->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('estrelas');
            $table->string('comentario')->nullable();
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
        Schema::dropIfExists('consumidors');
    }
}
