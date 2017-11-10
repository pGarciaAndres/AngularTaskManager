import { Component } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styles: [`
        em { color: red; }
    `]
})
export class CreateTaskComponent {
    title = 'Create Task';

    constructor(private taskService: TaskService) {}

    createTask(formValues: any) {
        const task = this.mapper(formValues);
        this.taskService.addTask(task);
    }

    private mapper(formValues: any): Task {
        return new Task(formValues.id, 
                        formValues.type,
                        formValues.technology,
                        formValues.description,
                        formValues.priority,
                        formValues.status,
                        formValues.creationDate);
    }
}