import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priorityPipe' })
export class PriorityPipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) {
            return 'glyphicon glyphicon-fire text-danger';
        } else if (value === 1) {
            return 'glyphicon glyphicon-arrow-up text-danger';
        } else if (value === 2) {
            return 'glyphicon glyphicon-arrow-right text-warning';
        } else if (value >= 3) {
            return 'glyphicon glyphicon-arrow-down text-success';
        }
    }
}

@Pipe({ name: 'priorityNamePipe' })
export class PriorityNamePipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) {
            return 'Critical';
        } else if (value === 1) {
            return 'Major';
        } else if (value === 2) {
            return 'Normal';
        } else if (value >= 3) {
            return 'Minor';
        }
    }
}