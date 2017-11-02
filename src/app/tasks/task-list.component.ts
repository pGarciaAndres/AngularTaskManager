import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    title = 'List of tasks';
    tasks: Task[];
    constructor() {
    }

    private loadTasks() {
        this.tasks = [];
    }

    ngOnInit() {
        this.loadTasks();
    }
}
