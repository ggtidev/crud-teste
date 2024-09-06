<?php

use App\Http\Controllers\ExpertiseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkingDaysController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(UserController::class)->group(function () {
    Route::post('users/store', 'store');
    Route::get('users/show', 'showAll');
    Route::get('users/find/{user_id}', 'find');
    Route::put('users/update/{user_id}', 'update');
    Route::delete('users/delete/{user_id}', 'delete');
});

Route::controller(WorkingDaysController::class)->group(function () {
    Route::get('workingdays/show', 'showAll');
});

Route::controller(ExpertiseController::class)->group(function () {
    Route::get('expertises/show', 'showAll');
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
