<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu', function (Blueprint $table) {

            $table->integer('restaurante_id')->unsigned();
            $table->foreign('restaurante_id')->references('id')->on('restaurantes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('refeicao_id')->unsigned();
            $table->foreign('refeicao_id')->references('id')->on('refeicaos')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->string('descricao')->nullable();
            $table->double('preco',6,2);
            $table->dateTime('hora_inicio')->nullable();
            $table->dateTime('hora_fim')->nullable();
            $table->string('imagem')->nullable();
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
        Schema::dropIfExists('menu');
    }
}
