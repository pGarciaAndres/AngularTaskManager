import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

const TASKS: Task[] = [
    new Task(
        1,
        "Issue",
        'Java',
        'Java issue description 000001',
        3,
        "Completed",
        '30 October 2017'
    ),
    new Task(
        2,
        "Issue",
        'Java',
        'Java issue description 000002',
        2,
        "Completed",
        '27 October 2017'
    ),
    new Task(
        3,
        "Issue",
        'SQL',
        'Sql issue description 000003',
        0,
        "In progress",
        '01 November 2017'
    ),
    new Task(
        4,
        "Issue",
        'Angular',
        'Angular issue description 000004',
        3,
        "New",
        '04 November 2017'
    ),
    new Task(
        5,
        "Issue",
        'Angular',
        'Angular issue description 000004',
        3,
        "Duplicated",
        '31 October 2017'
    ),
    new Task(
        6,
        "Development",
        'Python',
        'Python develpment description 000006',
        1,
        "On hold",
        '31 October 2017'
    ),
    new Task(
        7,
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
    
    //Get all task
    getTaskList(): Task[] {
        return TASKS;
    }

    //Get task by ID
    getTaskById(id: number): Task {
        return TASKS.find((task) => task.id === id);
    }

    //Add a new task
    addTask(task: Task): void {
        var taskIdList = TASKS.map(task => task.id);
        task.id = Math.max(...taskIdList) + 1;
        TASKS.push(task);
    }
}