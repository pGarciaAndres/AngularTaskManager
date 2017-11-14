import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styles: [`
        em { color: #E05C65; padding-left: 10px; }
        .error input, .error select, .error textarea { background-color:#E3C3C5; }
        .error :: -webkit-input-placeholder { color: #999; }
        .error :: -moz-placeholder { color: #999; }
        .error :: -ms-input-placeholder { color: #999; }
    `]
})
export class CreateTaskComponent implements OnInit {
    title: string = 'Create New Task';
    //Form fields
    createTaskForm: FormGroup;
    type: FormControl;
    technology: FormControl;
    description: FormControl;
    priority: FormControl;
    status: FormControl;
    creationDate: FormControl;
    today = new Date().toJSON().split('T')[0];
    defaultStatus: string = 'New';

    constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {}

    createTask(formValues: any) {
        const task = this.mapper(formValues);
        this.taskService.addTask(task);
        this.router.navigate(['/tasks', this.route.snapshot.params['sort'], this.route.snapshot.params['filtered']]);
    }

    private mapper(formValues: any): Task {
        return new Task(formValues.id, 
                        formValues.type,
                        formValues.technology,
                        formValues.description,
                        parseInt(formValues.priority),
                        formValues.status,
                        formValues.creationDate);
    }

    cancel() {
        this.router.navigate(['/tasks', this.route.snapshot.params['sort'], this.route.snapshot.params['filtered']]);
    }

    ngOnInit() {
        this.type = new FormControl('', Validators.required);
        this.technology = new FormControl('', Validators.required);
        this.description = new FormControl('', Validators.required);
        this.priority = new FormControl('', Validators.required);
        this.status = new FormControl('', Validators.required);
        this.creationDate = new FormControl('', Validators.required);

        this.createTaskForm = new FormGroup({
            type: this.type,
            technology: this.technology,
            description: this.description,
            priority: this.priority,
            status: this.status,
            creationDate: this.creationDate
        });

    }
}