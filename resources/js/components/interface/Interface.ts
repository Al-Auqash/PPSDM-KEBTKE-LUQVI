export interface TipeSurat {
    id: number,
    nama_tipe_surat: string,
}

export interface SuratKerjaSama {
    id_tipe_surat: number,
    nomor_surat: string,
    judul_ks: string,
    yang_bertanda_tangan: string,
    tanggal_dimulai: string,
    tanggal_berakhir: string,
    estimasi_penerimaan: string,
    realisasi_penerimaan: string,
    capaian: string,
    catatan: string,
    nama_mitra: string,
    koordinator: string,
    alamat: string,
    kontak: number,
    rekening_mitra: number,
}

export interface SuratKerjaSama {
    id: number,
    nomor_surat: string,
    nama_mitra: string,
    judul_ks: string,
}
