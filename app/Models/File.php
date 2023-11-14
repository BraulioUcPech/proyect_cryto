<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Attachment;

class File extends Model
{

    protected $fillable = [
        'user_id',
        'file_name',
        'encrypted_data',
        'iv',

    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
    public function files()
    {
        return $this->hasMany(File::class);
    }
    public function attachments_count()
    {
        return $this->attachments()->count();
    }

    use HasFactory;
}
