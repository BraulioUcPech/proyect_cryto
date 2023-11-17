<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Models\File;
use Illuminate\Support\Facades\Crypt;

class FileController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'file' => 'required|file|max:10240',
        ]);

        $fileContent = file_get_contents($request->file('file')->getRealPath());

        $encryptionKey = base64_decode(config('app.file_encryption_key'));
        if (!$encryptionKey) {
            return redirect()->back()->with('error', 'La clave de encriptación no está configurada.');
        }

        $iv = random_bytes(openssl_cipher_iv_length('aes-256-cbc'));

        $encryptedContent = openssl_encrypt($fileContent, 'aes-256-cbc', $encryptionKey, 0, $iv);
        if ($encryptedContent === false) {
            return redirect()->back()->with('error', 'Error al encriptar el archivo.');
        }

        $fileName = $request->file('file')->getClientOriginalName();
        $encryptedFileName = 'enc_' . $fileName;
        $path = Storage::disk('public')->put("files/{$encryptedFileName}", $encryptedContent);

        if (!$path) {
            return redirect()->back()->with('error', 'Error al guardar el archivo encriptado.');
        }
        $fileSize = Storage::disk('public')->size("files/{$encryptedFileName}");

        $file = new File;
        $file->user_id = auth()->id();
        $file->file_name = $encryptedFileName;
        $file->encrypted_data = $path;
        $file->iv = base64_encode($iv);
        $file->file_size = $fileSize;
        $file->save();

        return redirect()->back()->with('success', 'Archivo subido y encriptado correctamente.');
    }




    public function index()
    {
        $user = auth()->user();

        if (!$user) {
            return view('error', ['message' => 'Usuario no encontrado']);
        }

        $files = $user->files;
        $page = ['component' => 'component'];
        return view('files', compact('files', 'page'));
    }


    public function apiIndex()
    {
        $user = auth()->user();
        $files = File::where('user_id', $user->id)->get();
        return response()->json($files);
    }











}

