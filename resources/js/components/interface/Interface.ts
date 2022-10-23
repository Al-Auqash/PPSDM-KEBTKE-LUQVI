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

export interface DaftarMitraInterface {
    id: number,
    nama_mitra: string,
    alamat: string,
    koordinator: string,
    kontak: string
}

export interface SearchFilter {
    keyword: string,
    region_id: string,
}

export interface SearchFilterDaftarMitra {
    keyword: string,
}

export interface DataInformasiTransaksiInterface {
    id: number,
    nama_perusahaan: string,
    tanggal_transaksi: string,
    jenis_layanan: string,
    jumlah_penerimaan: string
}

export interface PenerimaanTotalInterface {
    year: number,
    estimasi_penerimaan: string,
    realisasi_penerimaan: string,
}
