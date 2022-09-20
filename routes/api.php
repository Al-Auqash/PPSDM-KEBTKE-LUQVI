<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SuratKerjaSamaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::get('/surat-kerja-sama/', [SuratKerjaSamaController::class, 'index']);
Route::get('/daftar-mitra', [SuratKerjaSamaController::class, 'index']);
Route::get('/tipe-surat', [SuratKerjaSamaController::class, 'tipeSurat']);
Route::get('/tipe-surat-by-id', [SuratKerjaSamaController::class, 'tipeSuratById']);


Route::prefix('surat-kerja-sama')->group(function () {
    Route::get('/tipe-surat', [SuratKerjaSamaController::class, 'getSuratKerjaSamaByTipeSurat']);
    Route::get('/', [SuratKerjaSamaController::class, 'getSuratKerjaSamaById']);
    Route::post('/tambah', [SuratKerjaSamaController::class, 'tambahSuratKerjaSama']);
});
