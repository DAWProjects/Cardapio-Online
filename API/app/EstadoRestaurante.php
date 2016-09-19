<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EstadoRestaurante extends Model
{
    protected $table = 'estado_restaurantes';

    protected $fillable = [
        'designacao',
        'descricao'
    ];

    public function restaurantes(){
        return $this->hasMany('App\Restaurante');
    }
}
