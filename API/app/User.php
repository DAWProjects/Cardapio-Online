<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password', 'tipo','social_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];


    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = \Hash::make($value);
    }


    public function consumidor(){
        return $this->hasOne('App\Consumidor');
    }

    public function restaurante(){
        return $this->hasOne('App\Restaurante');
    }

    public function administrador(){
        return $this->hasOne('App\Administrador');
    }
}
