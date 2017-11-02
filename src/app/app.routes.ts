import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list.component';

export const appRoutes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    // { path: 'tasks/:id', component: TaskDetailComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];