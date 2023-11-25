<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaceData extends Model
{

   

    public function user()
    {
        return $this->hasOne(User::class, 'face_id');
    }


    use HasFactory;
}
