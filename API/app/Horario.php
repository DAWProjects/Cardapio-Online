<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    protected $table = 'horarios';

    protected $fillable = [
        'dia_semana',
        'hora_abertura',
        'hora_fecho',
        'restaurante_id'
    ];

    public function restaurante(){
        return $this->belongsTo('App\Restaurante');
    }

}
