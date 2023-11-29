<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Models\FaceData;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class FaceLoginController extends Controller
{
    public function store(Request $request)
    {
        // Aquí, asumiendo que 'descriptors' es un campo en tu tabla de usuarios.
        $descriptors = $request->input('descriptors');

        // Actualiza los descriptores faciales del usuario
        $descriptors = json_encode($descriptors);
        $faceData = new FaceData();
        $faceData->descriptors = $descriptors;
        return response()->json([
            'success' => true,
            'message' => 'Descriptores faciales actualizados y usuario autenticado',
            'redirect' => '/dashboard'
        ]);
    }

}
