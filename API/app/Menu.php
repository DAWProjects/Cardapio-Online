<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';

    protected $fillable = [
        'restaurante_id',
        'refeico_id',
        'preco',
        'descricao',
        'hora_inicio',
        'hora_fim',
        'imagem'
    ];

    public function consumidores(){
        return $this->belongsToMany('App\Consumidor', 'rate_refeicao');
    }
}
