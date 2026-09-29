<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('i-teach', 'i-teach')->name('i-teach');
Route::inertia('i-game', 'i-game')->name('i-game');
Route::inertia('/finalist', 'finalist')->name('finalist');
Route::inertia('/pendaftaran-i-teach', 'pendaftaran')->name('pendaftaran-i-teach');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
