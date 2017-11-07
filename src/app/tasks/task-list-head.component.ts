import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task-list-head',
    templateUrl: './task-list-head.component.html'
})
export class TaskListHeadComponent {
    @Input() tasks: [Task];
}