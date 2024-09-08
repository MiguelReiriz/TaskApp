import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskModel } from '../model/task-model';
import { TaskServiceService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task: TaskModel | null = null;
  @Output() taskSaved = new EventEmitter<void>();

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskServiceService
  ) {
    // Inicializa el formulario dentro del constructor
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      expiration_date: ['', Validators.required],
      state: ['pending', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  saveTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task.id, this.taskForm.value).subscribe({
        next: () => {
          this.taskSaved.emit();
          this.taskForm.reset();
        },
        error: (err) => console.error('Error updating task:', err)
      });
    } else {
      this.taskService.createTask(this.taskForm.value).subscribe({
        next: () => {
          this.taskSaved.emit();
          this.taskForm.reset();
        },
        error: (err) => console.error('Error creating task:', err)
      });
    }
  }
}