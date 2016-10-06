<?php

namespace App\Http\Controllers;

use App\Restaurante;
use App\Menu;
use Illuminate\Http\Request;

use App\Http\Requests;

class RestauranteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $restaurantes = Restaurante::with('refeicaos.tipo')->get();
        return response()->json($restaurantes->toArray());

    }

//    public function menuByPreco($valor){
//
//        $menus = Menu::all()->where('preco', '<=', $valor);
//
//        return $menus->toArray();
//    }


    public function bypreco($valor){

        $arrray = array();
        $restaurantes = Restaurante::with('refeicaos')->get();
        foreach ($restaurantes as $rest){

            foreach ($rest->refeicaos as $refeicao){

                if($refeicao->pivot->preco <= $valor){
                    $arrray[]= $rest;

                    break;
                }
            }
        }
        return response()->json($arrray);
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $restaurante = Restaurante::create($request->all());
        $restaurante->save();
        return response()->json(["mensagem" => "Restaurante Registado Com Sucesso!"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $restaurante = Restaurante::find($id);
        return response()->json($restaurante->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $restaurante = Restaurante::find($id);
        $restaurante->fill($request->all());
        $restaurante->save();
        return response()->json(["mensagem" => "Restaurante Actualizado Com Sucesso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Restaurante::destroy($id);
    }
}
