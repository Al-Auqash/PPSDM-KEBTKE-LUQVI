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

    public function getSuratKerjaSamaByTipeSurat(Request $request)
    {
        $id = $request->id;

        $id = SuratKerjaSama::select('*')
            ->where('id_tipe_surat', '=', $id)
            ->get();

        return $id->toJson();
    }

    public function getDaftarMitra(Request $request)
    {
        $keyword = $request->keyword;
        $region_id = $request->region_id;

        $daftar = SuratKerjaSama::select('*')
            ->where('nama_mitra', 'LIKE', '%' . $keyword . '%')
            ->where('region_id', 'LIKE', '%' . $region_id . '%')
            ->get();

        return $daftar->toJson();
    }
}
