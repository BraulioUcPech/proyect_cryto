<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Attachment;

class File extends Model
{
    use HasFactory;
    protected $fillable = [ 
        'user_id',
        'name',
        'file_name',
        'file_size',
        'encrypted_data',
        'iv',
        'file_type',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // ...

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function attachments_count()
    {
        return $this->attachments()->count();
    }
}
