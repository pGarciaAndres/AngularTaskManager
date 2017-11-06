import { IType } from './type.model';
import { IStatus } from './status.model';

export class Task {
    id: string;
    type: IType;
    description: string;
    creationDate: Date;
    createdBy: string;
    status: IStatus;

    constructor(
        id?: string,
        type?: IType,
        description?: string,
        creationDate?: string,
        createdBy?: string,
        status?: IStatus
    ) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.creationDate = new Date(creationDate);
        this.createdBy = createdBy;
        this.status = status;
    }

}

