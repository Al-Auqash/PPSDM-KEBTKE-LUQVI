<?php

namespace App\Http\Controllers;

use App\Models\SuratKerjaSama;
use App\Models\TipeSurat;
use Illuminate\Http\Request;

class SuratKerjaSamaController extends Controller
{
    public function index()
    {
        $surat_kerja_sama = SuratKerjaSama::select('*')->paginate(10);

        return $surat_kerja_sama->toJson();
    }
    public function tipeSurat()
    {
        $tipe_surat = TipeSurat::select('*')->paginate(10);

        return $tipe_surat->toJson();
    }
}
