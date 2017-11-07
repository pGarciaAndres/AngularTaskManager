import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'typePipe' })
export class TypePipe implements PipeTransform {
    transform(value: string): string {
        if (value === 'Development') {
            return 'glyphicon glyphicon-record';
        } else if (value === 'Issue') {
            return 'glyphicon glyphicon-wrench';
        } else {
            return '';
        }
    }
}