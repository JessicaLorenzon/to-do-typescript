export class Tarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionaTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    get listaTarefas() {
        return this.tarefas;
    }
}
//# sourceMappingURL=tarefas.js.map