export class Task {
    id: string;
    description: string;
    creationDate: Date;
    createdBy: string;
    status: string;

    constructor(
        id?: string,
        description?: string,
        creationDate?: Date,
        createdBy?: string,
        status?: string
    ) {
        this.id = id;
        this.description = description;
        this.creationDate = new Date(creationDate);
        this.createdBy = createdBy;
        this.status = status;
    }
}

