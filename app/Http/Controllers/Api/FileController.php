<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index()
    {
        $files = auth()->user()->files;
        return response()->json($files);
    }

    public function store(Request $request)
    {
        // Tu lógica para almacenar archivos
    }

    public function show(File $file)
    {
        // Opcional: usar política para verificar propiedad
        $this->authorize('view', $file);

        return response()->json($file);
    }

    public function destroy(File $file)
    {
        // Opcional: usar política para verificar propiedad
        $this->authorize('delete', $file);

        // Eliminar archivo
        $file->delete();

        return response()->json(['message' => 'Archivo eliminado con éxito.']);
    }
}
