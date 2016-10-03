<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administradors';

    protected $fillable = [
        'nome',
        'sexo',
        'telefone'
    ];

    public function user(){
        return $this->hasOne('App\User');
    }
}
