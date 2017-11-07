import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { MatTooltipModule } from '@angular/material/tooltip';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task-summary',
    templateUrl: './task-summary.component.html',
    styleUrls: ['./task-summary.component.css']
})
export class TaskSummaryComponent {
    @Input() task: Task;
    @Output() taskChange: EventEmitter<string> = new EventEmitter<string>();

    //Priority tooltip position
    tooltipPosition = 'right';

    selectTask(taskElement: HTMLInputElement) {
        this.taskChange.emit(taskElement.value);
    }
}