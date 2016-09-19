<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoRefeicao extends Model
{
    protected $table = 'tipo_refeicaos';

    protected $fillable = [
        'designacao',
        'descricao'
    ];

    public function refeicoes(){
        return $this->hasMany('App\Refeicao');
    }
}
