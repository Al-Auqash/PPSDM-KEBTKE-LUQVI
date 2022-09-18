<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/daftar-mitra', function () {
    return view('welcome');
});

Route::get('/informasi-transaksi', function () {
    return view('welcome');
});

Route::prefix('surat-kerja-sama')->group(function () {
    Route::get('', function () {
        return view('welcome');
    });

    Route::get('/{nama}/{id}', function () {
        return view('welcome');
    });

    Route::get('/{nama}/{id}/detail/{secondid}', function () {
        return view('welcome');
    });

    Route::get('/{nama}/{id}/edit/{secondid}', function () {
        return view('welcome');
    });

    Route::get('/delete/{id}', function () {
        return view('welcome');
    });

    Route::get('/tambah', function () {
        return view('welcome');
    });
});


Route::prefix('authentication')->group(function () {
    Route::get('/sign-in', function () {
        return view('welcome');
    });
    Route::get('/sign-up', function () {
        return view('welcome');
    });
    Route::post('/sign-in', [LoginController::class, 'index']);
    Route::post('/sign-up', [RegisterController::class, 'index']);
    Route::post('/sign-out', [LogoutController::class, 'index']);
});
