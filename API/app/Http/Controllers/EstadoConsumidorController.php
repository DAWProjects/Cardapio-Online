<?php

namespace App\Http\Controllers;

use App\Consumidor;
use App\EstadoConsumidor;
use Illuminate\Http\Request;

use App\Http\Requests;

class EstadoConsumidorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $estados = EstadoConsumidor::all();
        return response()->json($estados->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $estado = EstadoConsumidor::create($request->all());
        $estado->save();
        return response()->json(["mensagem"=>"Estado Registado Com Sucesso"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $estado = EstadoConsumidor::find($id);
        return response()->json($estado->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $estado = EstadoConsumidor::find($id);
        $estado->fill($request->all());
        $estado->save();
        return response()->json(["mensagem"=>"Estado Actualizado Com Sucesso!"]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        EstadoConsumidor::destroy($id);
    }
}
