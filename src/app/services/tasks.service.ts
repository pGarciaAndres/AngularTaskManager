import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

const TASKS: Task[] = [
    new Task(
        '000001',
        "Issue",
        'Java',
        'Java issue description 000001',
        3,
        "Completed",
        '30 October 2017'
    ),
    new Task(
        '000002',
        "Issue",
        'Java',
        'Java issue description 000002',
        2,
        "Completed",
        '27 October 2017'
    ),
    new Task(
        '000003',
        "Issue",
        'SQL',
        'Sql issue description 000003',
        0,
        "In progress",
        '01 November 2017'
    ),
    new Task(
        '000004',
        "Issue",
        'Angular',
        'Angular issue description 000004',
        3,
        "New",
        '04 November 2017'
    ),
    new Task(
        '000005',
        "Issue",
        'Angular',
        'Angular issue description 000004',
        3,
        "Duplicated",
        '31 October 2017'
    ),
    new Task(
        '000006',
        "Development",
        'C#',
        'C# develpment description 000006',
        1,
        "On hold",
        '31 October 2017'
    ),
    new Task(
        '000007',
        "Development",
        'Java',
        'Java development description 000007',
        1,
        "Ready to deploy",
        '02 November 2017'
    )
];
//New(0), InProgress(1), ReadyToDeploy(2), InReview(3), Completed(4), OnHold(5), Duplicated(6), Cancelled(7)
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