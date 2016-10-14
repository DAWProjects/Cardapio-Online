<?php

namespace App\Http\Controllers;

use App\Refeicao;
use Illuminate\Http\Request;

use App\Http\Requests;

class RefeicaoController extends Controller
{

    private $aux;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $refeicoes = Refeicao::all();
        return response()->json($refeicoes->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }


    public function refeicaoByRestaurante($idRest, $idRef)
    {
        $this->aux = $idRest;
        $refeicao = Refeicao::with(['restaurantes' => function ($query) {
            $query->where('menu.restaurante_id', $this->aux);
        }])->where('id','=',$idRef)->get();


//        $refeicao->restaurantes() = Refeicao::find($idRef)->restaurantes()->where('menu.restaurante_id', $idRest)->get();


        return response()->json($refeicao->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $refeicao = Refeicao::create($request->all());
        $refeicao->save();
        return response()->json(["mensagem" => "Refeicao Registada Com Sucesso!"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $refeicao = Refeicao::find($id);
        return response()->json($refeicao->toArray());
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
        $refeicao = Refeicao::find($id);
        $refeicao->fill($request->all());
        $refeicao->save();
        return response()->json(["mensagem" => "Refeicao Actualizada Com Sucesso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Refeicao::destroy($id);
    }
}
