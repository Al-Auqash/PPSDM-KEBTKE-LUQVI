<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/daftar-mitra', function(){
    return view('welcome');
});

Route::prefix('surat-kerja-sama')->group(function () {
    Route::get('', function () {
        return view('welcome');
    });

    Route::get('/{id}', function () {
        return view('welcome');
    });

    Route::get('/detail/{id}', function () {
        return view('welcome');
    });

    Route::get('/edit/{id}', function () {
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
    Route::get('/signIn', function () {
        return view('welcome');
    });
});
