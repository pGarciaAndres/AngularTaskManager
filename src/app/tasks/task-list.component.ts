import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    title = 'List Of Tasks';
    tasks: Task[];
    tasksSort: string = 'creationDate';
    hideCompleted: boolean = false;
    filteredTask: Task[];
    @ViewChild('hide') hideButton:ElementRef;

    private params = {
        sort: '',
        filter: ''
    };

    private callbacks = {
        ['creationDate']: (current: Task, after: Task) => after.creationDate.getTime() - current.creationDate.getTime(),
        ['priority']: (current: Task, after: Task) => current.priority - after.priority
    };

    constructor(private taskService: TaskService, private route: ActivatedRoute) {
    }

    // Load tasks
    private loadTasks() {
        this.tasks = this.taskService.getTaskList();
        this.filteredTask = this.tasks;
        this.sortTasks(this.tasksSort);
    }

    // Sort tasks
    sortTasks(sort) {
        this.tasksSort = sort;
        this.filteredTask.sort(this.resolveSortCallback(sort));
    }

    private resolveSortCallback = (entry: string) => (
        this.callbacks[entry]
    );

    // Filter tasks
    filterTasks() {
        this.hideCompleted = !this.hideCompleted;
        this.filteredTask = this.tasks.filter(
            (task) => !this.hideCompleted || task.status != 'Completed'
        );
        this.sortTasks(this.tasksSort);
        this.hideButton.nativeElement.blur();
    }

    ngOnInit() {
        this.loadTasks();
        // Init Parameters
        this.getParameters();
    }

    // Get parameters
    private getParameters() {
        this.route.queryParams
        .subscribe(params => {
            this.params.sort = params.sort;
            this.params.filter = params.filter;
        });
        
        if (this.params.sort) {
            this.tasksSort = this.params.sort;
            this.sortTasks(this.tasksSort);
        }
        if (this.params.filter === 'true') {
            this.hideCompleted = !this.params.filter;
            this.filterTasks();
        }
    }
}
