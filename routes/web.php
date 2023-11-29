<?php

use App\Http\Controllers\FaceLoginController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FileController;
use App\Http\Controllers\Api\UserController;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/files', [FileController::class, 'index'])->name('files.index');
    Route::post('/files', [FileController::class, 'store'])->name('files.store');
    Route::get('/files/{id}', [FileController::class, 'download'])->name('files.download');
    Route::get('/files/{id}/delete', [FileController::class, 'delete'])->name('files.delete');
    Route::get('/files/{id}', [FileController::class, 'downloadEncrypted'])->name('files.downloadEncrypted');




});

Route::get('/verify-face', function () {
    return view('verify-face');
});
Route::get('/infoface', function () {
    return Inertia::render('Infface');
});

Route::get('/contact', function () {
    return Inertia::render('Contacto');
});
Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});


// routes/react
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/faq', function () {
    return Inertia::render('Faq');
});



Route::get('/login-google', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/google-callback', function () {
    $user = Socialite::driver('google')->user();

    // Buscar por correo electrónico puede ser una mejor opción si el correo electrónico es único en su sistema.
    $userExists = User::where('email', $user->email)->first();

    if (!$userExists) {
        $newUser = User::create([
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'external_id' => $user->id,
            'external_auth' => 'google',
        ]);
        Auth::login($newUser);
    } else {
        Auth::login($userExists);
    }

    // Asegúrate de devolver la redirección.
    return redirect('/dashboard');
});


Route::post('/api/save-face-data', [FaceLoginController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::get('/api/files', [FileController::class, 'apiIndex'])->middleware('auth:sanctum');
    Route::post('/api/files', [FileController::class, 'apiIndex'])->middleware('auth:sanctum');

});

require __DIR__ . '/auth.php';

