<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EstadoConsumidor extends Model
{
    protected $table = 'estado_consumidors';

    protected $fillable = [
        'designacao',
        'descricao'
    ];

    public function consumidores(){
        return $this->hasMany('App\Consumidor');
    }
}
