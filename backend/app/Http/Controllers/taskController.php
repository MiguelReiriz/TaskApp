<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function list(){
        $tasks = Task::all();
        /*if ($tasks->isEmpty()){
            $data = [
                'message' => 'There is not tasks',
                'status' => 200
            ];
            return response()->json($data, 200);
        }*/
       $data = [
        'tasks' => $tasks,
        'status'=> 200
       ];
       return response()->json($data,200);
    }

    public function create(Request $request){

        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'expiration_date' => 'required|date',
            'state' => 'required|string|in:pendiente,completado'
        ]);

        if ($validator->fails()){
            $data = [
                'message' => 'validation failed',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'expiration_date' => $request->expiration_date,
            'state'=> $request->state
        ]);
        /*if (!$task) {
        }*/
        $data = [
            'task' => $task,
            'status' => 201
        ];
        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
    $task = Task::find($id);
    $validator = Validator::make($request->all(), [
        'state' => 'required|string|in:pendiente,completado'
    ]);
    
    if ($validator->fails()) {
        $data = [
            'message'=> 'validation failed',
            'errors'=> $validator->errors(),
            'status'=> 400
        ];
        return response()->json($data, 400);

    }

    if($request->has('state')){
        $task->state = $request->state;
    }
    $task->save();

    $data = [
        'message' =>'Task updated',
        'task' => $task,
        'status' => 200
        ];
    }

    
    public function delete($id){
        $task = Task::find($id);

        if (!$task) {
            $data = [
                'message'=> 'Taks missing',
                'status'=> 404
            ];
            return response()->json($data, 404);
        }
        $task->delete();
        $data = [
            'message'=> 'Taks deleted',
            'status'=> 200
        ];
        return response()->json(null, 200);
    }
}
       
