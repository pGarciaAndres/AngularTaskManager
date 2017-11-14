import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/tasks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    title = 'List Of Tasks';
    tasks: Task[];
    tasksSort: string = 'creationDate';
    hideCompleted: boolean = false;
    filteredTask: Task[];
    @ViewChild('hide') hideButton:ElementRef;

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
        
        if (this.route.snapshot.params['sort']) {
            this.tasksSort = this.route.snapshot.params['sort'];
        }
        this.sortTasks(this.tasksSort);

        if (this.route.snapshot.params['filtered'] === 'true') {
            this.hideCompleted = !this.route.snapshot.params['filtered'];
            this.filterTasks();
        }
    }
}
