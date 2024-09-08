import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../model/task-model';
import { TaskServiceService } from '../services/task.service';
import { CommonModule } from '@angular/common'; 
import { TaskFormComponent } from '../task-form/task-form-component.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{


  tasks: TaskModel[] = [];

  constructor(
    private taskService: TaskServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Error getting tasks:', err)
    });
  }

  deleteTask(id: string): void {
      this.taskService.deleteTask(id).subscribe({
        next: () => this.getTasks(),
        error: (err) => console.error('Error deleting task:', err)
      });
    }
    editTask(id: string): void {
      this.router.navigate(['/task/edit', id]);
    }
}
