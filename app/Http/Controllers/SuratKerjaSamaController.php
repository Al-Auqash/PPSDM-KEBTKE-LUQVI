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

    public function tipeSuratById(Request $request)
    {
        $id = $request->id;
        $tipe_surat = TipeSurat::where('id', '=', $id)
            ->first();

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

    public function getSuratKerjaSamaById(Request $request)
    {
        $id = $request->id;

        $id = SuratKerjaSama::select('*')
            ->where('id', '=', $id)
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

    public function tambahSuratKerjaSama(Request $request)
    {
        $surat_kerja_sama = SuratKerjaSama::create([
            "id_tipe_surat" => $request->id_tipe_surat,
            "nomor_surat" => $request->nomor_surat,
            "judul_ks" => $request->judul_ks,
            "yang_bertanda_tangan" => $request->yang_bertanda_tangan,
            "tanggal_dimulai" => $request->tanggal_dimulai,
            "tanggal_berakhir" => $request->tanggal_berakhir,
            "estimasi_penerimaan" => $request->estimasi_penerimaan,
            "realisasi_penerimaan" => $request->realisasi_penerimaan,
            "capaian" => $request->capaian,
            "catatan" => $request->catatan,
            "nama_mitra" => $request->nama_mitra,
            "koordinator" => $request->koordinator,
            "alamat" => $request->alamat,
            "kontak" => $request->kontak,
            "rekening_mitra" => $request->rekening_mitra,
        ]);

        if ($surat_kerja_sama) {
            return response()->json([
                "success" => true,
            ], 201);
        }
    }
}
