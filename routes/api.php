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
Route::get('/surat-kerja-sama', [SuratKerjaSamaController::class, 'getSuratKerjaSama']);
Route::get('/tipe-surat/', [SuratKerjaSamaController::class, 'tipeSurat']);
