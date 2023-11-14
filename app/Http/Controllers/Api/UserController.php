<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show(User $user)
    {
        return $user;
    }

    // Agrega aquí más métodos según tus necesidades

    public function store(Request $request)
    {
        $user = User::create($request->all());

        return response()->json($user, 201);
    }
    public function update(Request $request, User $user)
    {
        $user->update($request->all());

        return response()->json($user);
    }
    public function delete(User $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }

    

}
