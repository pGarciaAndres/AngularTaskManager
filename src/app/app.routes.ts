import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list.component';
import { CreateTaskComponent } from './tasks/create-task.component';

export const appRoutes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/new', component: CreateTaskComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];