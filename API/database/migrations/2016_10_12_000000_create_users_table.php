<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('restaurante_id')->unsigned()
                                             ->nullable();
            $table->foreign('restaurante_id')->references('id')->on('restaurantes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('consumidor_id')->unsigned()
                                            ->nullable();
            $table->foreign('consumidor_id')->references('id')->on('consumidors')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('administrador_id')->unsigned()
                                               ->nullable();
            $table->foreign('administrador_id')->references('id')->on('administradors')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->rememberToken();
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
        Schema::drop('users');
    }
}
