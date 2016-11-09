<?php

namespace App;


class GeoIP
{
    public $api = 'http://ip-api.com/json';

    public $properties;


    public function __get($key)
    {
        if (isset($this->properties[$key])) {
            return $this->properties[$key];
        }

        return null;
    }


    public function request()
    {


        $url = sprintf($this->api);

        $data = $this->sendRequest($url);

        $this->properties = json_decode($data, true);

    }

    public function sendRequest($api)
    {

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_URL, $api);

        return curl_exec($curl);
    }
}