export class Tarefa {
    private _id: number;
    private _complited: boolean;
    private _description: string;

    constructor(id: number, description: string) { 
        this._id = id;
        this._complited = false;
        this._description = description;
    }

    get id(): number {
        return this._id
    }

    get complited(): boolean {
        return this._complited
    }
    set complited(value: boolean) {
        this._complited = value;
    }
    
    get description(): string {
        return this._description
    }

}