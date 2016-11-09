<?php

return [
    /*
     |--------------------------------------------------------------------------
     | Laravel CORS
     |--------------------------------------------------------------------------
     |

     | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
     | to accept any value.
     |
     */
    'supportsCredentials' => false,
    'allowedOrigins' => array('http://evil.com'),
    'allowedHeaders' => array('Content-Type','Connection', 'Accept','Cache-Control ', 'Authorization','Origin','X-Auth-Token','Access-Control-Allow-Origin', 'X-Requested-With', 'Application'),
    'allowedMethods' => array('GET','POST','PUT','DELETE','OPTIONS'),
    'exposedHeaders' => array(),
    'maxAge' => 0,
    'hosts' => array(),
];

