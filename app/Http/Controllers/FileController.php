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
            // 10MB max size
        ]);

        $fileContent = file_get_contents($request->file('file')->getRealPath());

        $encryptionKey = base64_decode(config('app.file_encryption_key'));
        $iv = random_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encryptedContent = openssl_encrypt($fileContent, 'aes-256-cbc', $encryptionKey, 0, $iv);


        if ($encryptedContent === false) {
            // Handle encryption error...
        }

        $fileName = $request->file('file')->getClientOriginalName();
        $encryptedFileName = 'enc_' . $fileName;
        $path = Storage::put("public/files/{$encryptedFileName}", $encryptedContent);

        if ($path === false) {
            // Handle file storage error...
        }

        $file = new File;
        $file->user_id = auth()->id();
        $file->name = $request->file('file')->getClientOriginalName();

        $file->file_name = $fileName;
        $file->encrypted_data = $path;
        $file->iv = base64_encode($iv);
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




    public function download($id)
    {
        $testString = 'Esto es una prueba.';
        $encryptionKey = base64_decode(config('app.file_encryption_key'));
        $iv = random_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encrypted = openssl_encrypt($testString, 'aes-256-cbc', $encryptionKey, 0, $iv);
        $decrypted = openssl_decrypt($encrypted, 'aes-256-cbc', $encryptionKey, 0, $iv);

        if ($decrypted !== $testString) {
            Log::error('La prueba de encriptación/desencriptación falló. Encrypted: ' . $encrypted . ' Decrypted: ' . $decrypted);
            return response()->json(['message' => 'Error al desencriptar el archivo.'], 500);

        } else {
            Log::info('La prueba de encriptación/desencriptación fue exitosa.');
            return response()->json(['message' => 'no fallo al desencriptar el archivo.'], 500);


        }

    }






}

