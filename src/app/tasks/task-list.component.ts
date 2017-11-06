import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/tasks.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    title = 'List of tasks';
    tasks: Task[];

    constructor(private taskService: TaskService) {
    }

    private loadTasks() {
        this.tasks = this.taskService.getTaskList();
    }

    ngOnInit() {
        this.loadTasks();
    }
}
