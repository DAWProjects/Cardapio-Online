<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Refeicao extends Model
{
    protected $table = 'refeicaos';

    protected $fillable = [
        'nome',
        'tipo_id'
    ];

    public function tipo(){
        return $this->belongsTo('App\TipoRefeicao');
    }

    public function restaurantes(){
        return $this->belongsToMany('App\Restaurante', 'menu');
    }
}
