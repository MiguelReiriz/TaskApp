import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/tasks.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
