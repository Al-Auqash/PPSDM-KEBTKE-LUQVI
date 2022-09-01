<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipeSurat extends Model
{
    use HasFactory;

    protected $table = 'tipe_surat';

    protected $fillable = [
        'nama_tipe_surat',
    ];
}
