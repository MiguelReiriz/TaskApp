import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/*
const routes = [
  { path: '', component: AppComponent },
  { path: 'another', component: AnotherComponent }
];*/
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
