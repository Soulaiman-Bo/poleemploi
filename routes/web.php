<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/jobs', function () {
    return Inertia::render('Jobs');
});

Route::get('/testadmin', function () {
    return Inertia::render('Dashboard/AdminDashboard');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// routes/web.php


// Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {

//     Route::get('/', function () {
//         return Inertia::render('AdminDashboard');
//     })->name('admin.dashboard');

// });

Route::middleware(['auth', 'role:candidate'])->group(function () {
   
});

Route::middleware(['auth', 'role:recruteur'])->group(function () {
   
});

Route::middleware(['auth', 'role:admin'])->group(function () {
   
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
