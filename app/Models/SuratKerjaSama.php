<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratKerjaSama extends Model
{
    use HasFactory;

    protected $table = 'surat_kerja_sama';

    protected $fillable = [
        'tipe_surat',
        'nomor_surat',
        'judul_ks',
        'yang_bertanda_tangan',
        'tanggal_dimulai',
        'tangal_berakhir',
        'estimasi_penerimaan',
        'realisasi_penerimaan',
        'capaian',
        'catatan',
        'nama_mitra',
        'kooridnator',
        'alamat',
        'kontak',
        'rekening_mitra',
    ];
}
