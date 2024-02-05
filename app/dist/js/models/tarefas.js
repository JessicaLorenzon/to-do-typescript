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
    completarTarefa(numeroId) {
        this.tarefas.map((tarefa) => {
            if (tarefa.id == numeroId) {
                tarefa.complited = tarefa.complited ? false : true;
            }
            return tarefa;
        });
    }
    excluirTarefa(numeroId) {
        this.tarefas = this.tarefas.filter((tarefa) => {
            return tarefa.id !== numeroId;
        });
    }
}
//# sourceMappingURL=tarefas.js.map