import { IType } from './type.model';
import { IStatus } from './status.model';

export class Task {
    id: string;
    type: IType;
    technology : string; //ITechnology
    description: string;
    priority: string; //IPriority
    status: IStatus;
    creationDate: Date;
    createdBy: string;

    constructor(
        id?: string,
        type?: IType,
        technology?: string,
        description?: string,
        priority?: string,
        status?: IStatus,
        creationDate?: string,
        createdBy?: string
    ) {
        this.id = id;
        this.type = type;
        this.technology = technology;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.creationDate = new Date(creationDate);
        this.createdBy = createdBy;
    }

}

