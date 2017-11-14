export class Task {
    id: string;
    type: string;
    technology : string;
    description: string;
    priority: number;
    status: string;
    creationDate: Date;

    constructor(
        id?: string,
        type?: string,
        technology?: string,
        description?: string,
        priority?: number,
        status?: string,
        creationDate?: string
    ) {
        this.id = id;
        this.type = type;
        this.technology = technology;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.creationDate = new Date(creationDate);
    }

}

