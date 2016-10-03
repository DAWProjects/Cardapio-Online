<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Consumidor extends Model
{
    protected $table = 'consumidors';

    protected $fillable = [
        'nome',
        'sexo',
        'telefone',
        'estado_id'
    ];

    public function estado(){
        return $this->belongsTo('App\EstadoConsumidor');
    }

    public function user(){
        return $this->hasOne('App\User');
    }

    public function restaurantes(){
        return $this->belongsToMany('App\Restaurante', 'rate_restaurante');
    }

    public function refeicaos(){
        return $this->belongsToMany('App\Menu', 'rate_refeicao');
    }
}
