<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FaceData;

class FaceLoginController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->input('descriptors');
        // Guarda $data en la base de datos
        $faceData = new FaceData();
        $faceData->descriptors = json_encode($data);
        $faceData->save();

    return response()->json(['success' => true, 'message' => 'Datos de rostro guardados con éxito', 'redirect' => '/dashboard']);
    }
}
