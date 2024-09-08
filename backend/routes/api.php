<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\taskController;
use App\Models\Task;

Route::get('/tasks', [taskController::class, 'list']);

Route::get('/tasks/{id}', function () {
    return 'get one task';
});

Route::post('/tasks', [taskController::class, 'create']);

// Actualizar solo una cosa
Route::patch('/tasks/{id}', [taskController::class, 'update']);

Route::delete('/tasks/{id}', [taskController::class,'delete']);
