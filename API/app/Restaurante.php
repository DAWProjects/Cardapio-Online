<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurante extends Model
{
    protected $table = 'restaurantes';

    protected $fillable = [
        'nome',
        'telefone',
        'cidade',
        'av_rua',
        'numero',
        'lat',
        'long',
        'logo_img',
        'imagem',
        'estado_id',
        'user_id'
    ];

    public function estado(){
        return $this->belongsTo('App\EstadoRestaurante');
    }

    public function user(){
        return $this->hasOne('App\User');
    }

    public function horarios(){
        return $this->hasMany('App\Horario');
    }

    public function refeicaos(){
        return $this->belongsToMany('App\Refeicao', 'menu')->withPivot('preco','descricao','imagem');
    }

    public function consumidors(){
        return $this->belongsToMany('App\Consumidor', 'rate_restaurante');
    }
}
