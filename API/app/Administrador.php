<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table = 'administradors';

    protected $fillable = [
        'nome',
        'sexo',
        'telefone',
        'user_id'
    ];

    public function user(){
        return $this->hasOne('App\User');
    }
}
