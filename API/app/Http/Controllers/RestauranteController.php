<?php

namespace App\Http\Controllers;

use App\Restaurante;
use App\GeoIP;
use Illuminate\Http\Request;

use App\Http\Requests;

class RestauranteController extends Controller
{
    private $aux;
    private $geo;

    /**
     * RestauranteController constructor.
     * inicializa a Geolocalizacao
     */
    public function __construct()
    {
        $this->geo = new GeoIP;
        $this->geo->request();

    }


    /**
     * Retorna um array Json com todos os restaurantes e o seu menu
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $restaurantes = Restaurante::with('refeicaos.tipo')->orderBy('id', 'asc')->get();
        return response()->json($restaurantes->toArray());

    }

    public function proximos()
    {


        $restaurantes = Restaurante::with('refeicaos')->where('cidade', 'Like', $this->geo->city)->get();

        $restaurantes = $restaurantes->toArray();

        return response()->json(compact('restaurantes'));

    }


    /**
     * Retorna um array Json com os restaurantes e suas refeicoes que tenham
     * um preco igual ou menor ao parametro
     *
     * @return \Illuminate\Http\Response
     */
    public function refeicaosByPreco($preco)
    {
        $this->aux = $preco;
        $restaurantes = Restaurante::with(['refeicaos' => function ($query) {
            $query->where('menu.preco', '<=', $this->aux);
        }])->get();

        return response()->json($restaurantes->toArray());
    }


    /**
     * Retorna um array Json com os restaurantes(com suas refeicoes)
     * que no seu nome tenha uma sequencia de caracteres semelhante a string do parametro
     *
     * @return \Illuminate\Http\Response
     */
    public function restaurantesByName($nome)
    {
        $this->aux = $nome;
        $restaurantes = Restaurante::with('refeicaos')->where('nome', 'Like', '%' . $this->aux . '%')->get();

        return response()->json($restaurantes->toArray());
    }


    /**
     * Retorna um array Json com os restaurantes(com suas refeicoes)
     * que estejam uma cidade que tenha no seu nome uma sequencia de caracteres semelhante
     * a string do parametro
     *
     * @return \Illuminate\Http\Response
     */
    public function restaurantesByCity($nome)
    {
        $this->aux = $nome;
        $restaurantes = Restaurante::with('refeicaos')->where('cidade', 'Like', '%' . $this->aux . '%')->get();

        return response()->json($restaurantes->toArray());
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
