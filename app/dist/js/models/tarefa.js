export class Tarefa {
    constructor(id, description) {
        this._id = id;
        this._complited = false;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    get complited() {
        return this._complited;
    }
    set complited(value) {
        this._complited = value;
    }
    get description() {
        return this._description;
    }
}
//# sourceMappingURL=tarefa.js.map