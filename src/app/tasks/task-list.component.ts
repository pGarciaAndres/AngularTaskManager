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
    sortBy: string = 'creationDate';

    private callbacks = {
        ['creationDate']: (current: Task, after: Task) => after.creationDate.getTime() - current.creationDate.getTime(),
        ['priority']: (current: Task, after: Task) => current.priority - after.priority
    };

    constructor(private taskService: TaskService) {
    }

    private loadTasks() {
        this.tasks = this.taskService.getTaskList();
    }

    sortTasks(sortBy) {
        this.tasks.sort(this.resolveSortCallback(sortBy));
    }

    private resolveSortCallback = (entry: string) => (
        this.callbacks[entry]
    );

    ngOnInit() {
        this.loadTasks();
        this.sortTasks(this.sortBy);
    }
}
