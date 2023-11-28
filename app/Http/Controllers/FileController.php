<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use App\Models\File;
use Illuminate\Support\Facades\Crypt;

class FileController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'file' => 'required|file|max:5242880',
        ]);
        $fileInstance = $request->file('file');
        $fileContent = file_get_contents($fileInstance->getRealPath());


        if (!$request->hasFile('file')) {
            return redirect()->back()->with('error', 'No se ha subido ningún archivo.');
        }

        $fileInstance = $request->file('file');
        $fileContent = file_get_contents($fileInstance->getRealPath());

        $encryptionKey = base64_decode(config('app.file_encryption_key'));
        if (!$encryptionKey) {
            return redirect()->back()->with('error', 'La clave de encriptación no está configurada.');
        }

        $iv = random_bytes(openssl_cipher_iv_length('aes-256-cbc'));
        $encryptedContent = openssl_encrypt($fileContent, 'aes-256-cbc', $encryptionKey, 0, $iv);

        if ($encryptedContent === false) {
            return redirect()->back()->with('error', 'Error al encriptar el archivo.');
        }

        $originalFileName = $fileInstance->getClientOriginalName();
        $encryptedFileName = 'enc_' . $originalFileName;
        $path = Storage::disk('public')->put("files/{$encryptedFileName}", $encryptedContent);

        if (!$path) {
            return redirect()->back()->with('error', 'Error al guardar el archivo encriptado.');
        }

        $fileSize = Storage::disk('public')->size("files/{$encryptedFileName}");


        $file = new File;
        $file->user_id = auth()->id();
        $file->name = $fileInstance->getClientOriginalName();
        $file->file_name = 'enc_' . $file->name;
        $file->file_size = $fileInstance->getSize();
        $file->encrypted_data = base64_encode($path);
        $file->iv = base64_encode($iv);
        $file->file_type = $fileInstance->getClientMimeType();
        $file->save();

        return redirect()->back()->with('success', 'Archivo subido y encriptado correctamente.');
    }
    public function delete($id)
    {
        $file = File::find($id);

        if (!$file) {
            return response()->json(['success' => false, 'message' => 'Archivo no encontrado.']);
        }

        if ($file->path && Storage::exists($file->path)) {
            Storage::delete($file->path);
        }

        $file->delete();

        return Redirect::to('/files');
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




    public function downloadEncrypted($id)
{
    $file = File::findOrFail($id);

    $encryptedFilePath = "files/{$file->file_name}";
    if (!Storage::disk('public')->exists($encryptedFilePath)) {
        return redirect()->back()->with('error', 'El archivo no existe.');
    }

    $encryptedContent = Storage::disk('public')->get($encryptedFilePath);

    $headers = [
        'Content-Disposition' => 'attachment; filename="' . $file->file_name . '"',
        'Content-Length' => $file->file_size
    ];

    ob_end_clean();

    return response()->make($encryptedContent, 200, $headers);
}



    public function download($id)
    {
        $file = File::findOrFail($id);

        $encryptionKey = base64_decode(config('app.file_encryption_key'));
        if (!$encryptionKey) {
            return redirect()->back()->with('error', 'La clave de encriptación no está configurada.');
        }

        $encryptedContent = Storage::disk('public')->get("files/{$file->file_name}");

        $iv = base64_decode($file->iv);
        $decryptedContent = openssl_decrypt($encryptedContent, 'aes-256-cbc', $encryptionKey, 0, $iv);

        if ($decryptedContent === false) {
            return redirect()->back()->with('error', 'Error al descifrar el archivo.');
        }

        $headers = [
            'Content-Disposition' => 'attachment; filename="' . $file->name . '"',
            'Content-Type' => $file->mime
        ];

        ob_end_clean();

        return response()->make($decryptedContent, 200, $headers);
    }











}

