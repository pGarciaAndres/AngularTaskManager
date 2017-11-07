import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

const TASKS: Task[] = [
    new Task(
        '000001',
        {
            id: 1,
            name: "Issue"
        },
        'Java',
        'Task description 000001',
        'Low',
        {
            id: 1,
            name: "Completed"
        },
        '01 November 2017',
        'QA Tester'
    ),
    new Task(
        '000002',
        {
            id: 1,
            name: "Issue"
        },
        'Java',
        'Task description 000002',
        'Medium',
        {
            id: 1,
            name: "InProgress"
        },
        '02 November 2017',
        'QA Tester'
    ),
    new Task(
        '000003',
        {
            id: 1,
            name: "Issue"
        },
        'SQL',
        'Task description 000003',
        'High',
        {
            id: 1,
            name: "New"
        },
        '03 November 2017',
        'QA Tester'
    )
];
//New, InProgress, ReadyToDeploy, InReview, Completed, OnHold, Duplicated, Cancelled
@Injectable()
export class TaskService {
    getTaskList(): Task[] {
        return TASKS;
    }

    getTaskById(id: string): Task {
        return TASKS.find((task) => task.id === id);
    }

    addTask(task: Task): void {
        TASKS.push(task);
    }
}