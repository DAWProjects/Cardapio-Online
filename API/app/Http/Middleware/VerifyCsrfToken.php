<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'todos-admins',
        'criar-admin',
        'ver-admin/*',
        'todos-admins/*',
        'apagar-admin/*',
        'todos-consumidores',
        'criar-consumidor',
        'ver-consumidor/*',
        'todos-consumidores/*',
        'apagar-consumidor/*',

        'todos-estados-consumidor',
        'criar-estado-consumidor',
        'ver-estado-consumidor/*',
        'todos-estados-consumidor/*',
        'apagar-estado-consumidor/*',

        'todos-estados-restaurantes',
        'criar-estado-restaurantes',
        'ver-estado-restaurantes/*',
        'todos-estados-restaurantes/*',
        'apagar-estado-restaurantes/*',

        'todas-refeicoes',
        'criar-refeicoes',
        'ver-refeicoes/*',
        'todas-refeicoes/*',
        'apagar-refeicoes/*',
        'refeicao-by-restaurante/*',

        'todos-restaurantes',
        'criar-restaurantes',
        'ver-restaurantes/*',
        'todos-restaurantes/*',
        'apagar-restaurantes/*',
        'refeicaos-by-preco/*',
        'restaurantes-by-name/*',
        'restaurantes-by-city/*',
        'restaurantes-proximos',

        'todos-tipos-refeicoes',
        'criar-tipo-refeicoes',
        'ver-tipo-refeicoes/*',
        'todos-tipos-refeicoes/*',
        'apagar-tipo-refeicoes/*',

        'user-location',

        'auth/facebook',
        'auth/facebook/callback'
    ];
}
