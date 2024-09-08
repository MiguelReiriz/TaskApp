import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { TaskModel } from '../model/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

    private apiUrl= "http://localhost:8003/api/tasks"


  constructor(private httpClient : HttpClient) { }
  
    getTasks(): Observable<TaskModel[]> {
      return this.httpClient.get<TaskModel[]>(`${this.apiUrl}`).pipe(
        tap(dato => console.log('Datos recibidos:', dato))
      );
    }

createTask(task: TaskModel): Observable<TaskModel> {
  return this.httpClient.post<TaskModel>(this.apiUrl, task);
}


updateTask(id: string, task: TaskModel): Observable<TaskModel> {
  return this.httpClient.put<TaskModel>(`${this.apiUrl}/${id}`, task);
}


deleteTask(id: string): Observable<void> {
  return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
}
  }

