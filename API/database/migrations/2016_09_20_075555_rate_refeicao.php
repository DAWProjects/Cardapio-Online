<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RateRefeicao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rate_refeicao', function (Blueprint $table){

            $table->integer('refeicao_id')->unsigned();
            $table->foreign('refeicao_id')->references('refeicao_id')->on('menus')->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('restaurante_id')->unsigned();
            $table->foreign('restaurante_id')->references('restaurante_id')->on('menus')->onDelete('cascade')
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
        //
    }
}
