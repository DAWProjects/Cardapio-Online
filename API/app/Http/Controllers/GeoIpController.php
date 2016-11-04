<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GeoIP;

class GeoIpController extends Controller
{

    /**
     * GeoIpController constructor.
     */
    private $geo;


    public function __construct()
    {

        $this->geo = new GeoIP;
        $this->geo->request();

    }


    public function location()
    {

        $geoLocation = (object) $this->geo->properties;

        return response()->json(compact('geoLocation'));
    }
}
