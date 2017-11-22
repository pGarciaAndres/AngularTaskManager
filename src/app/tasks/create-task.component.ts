import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Description size validation
const tooShort20 = (control: FormControl): { [key:string]: any } => {
    const descriptionSize = control.value.toString().length;
    return (!!descriptionSize && (descriptionSize < 20)) ?
      { 'tooShort20' : 'invalid description' } : null;
}

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
    sort: string = '';
    filter: string = '';
    // Form fields
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

    // Create a new Task
    createTask(formValues: any) {
        const task = this.mapper(formValues);
        this.taskService.addTask(task);
        this.router.navigate(['tasks'], { queryParams: { sort: this.sort, filter: this.filter } });
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

    // Cancel new Task creation
    cancel() {
        this.router.navigate(['tasks'], { queryParams: { sort: this.sort, filter: this.filter } });
    }

    ngOnInit() {
        // Init Form
        this.initTaskForm();
        // Init Parameters
        this.getParameters();
    }

    // Init Form
    private initTaskForm() {
        this.type = new FormControl('', Validators.required);
        this.technology = new FormControl('', Validators.required);
        this.description = new FormControl('', [Validators.required, tooShort20]);
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

    // Get parameters
    private getParameters() {
        this.route.queryParams
        .subscribe(params => {
            this.sort = params.sort;
            this.filter = params.filter;
        });
    }
}