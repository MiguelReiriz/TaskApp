
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaskFormComponent } from './task-form/task-form-component.component';

export const routes: Routes = [
    { path: 'tasks', component: ListComponent },
    { path: 'task/new', component: TaskFormComponent },
    { path: 'task/edit/:id', component: TaskFormComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
