<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurante extends Model
{
    protected $table = 'restaurantes';

    protected $fillable = [
        'nome',
        'telefone',
        'email',
        'cidade',
        'av_rua',
        'numero',
        'lat',
        'long',
        'cardapio_img',
        'logo_img',
        'imagem',
        'estado_id',
        'user_id'
    ];

    public function estado(){
        return $this->belongsTo('App\EstadoRestaurante');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function refeicoes(){
        return $this->belongsToMany('App\Refeicao', 'menu');
    }

    public function consumidores(){
        return $this->belongsToMany('App\Consumidor', 'rate_restaurante');
    }
}
