export class Tarefas {
    constructor() {
        this.tarefas = [];
        this._filter = '';
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter = value;
    }
    adicionaTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    get listaTarefas() {
        return this.tarefas.filter((tarefa) => {
            if (this._filter == 'ativas') {
                return tarefa.complited == false;
            }
            if (this._filter == 'concluidas') {
                return tarefa.complited == true;
            }
            return true;
        });
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
    contadorPendentes() {
        let contador = 0;
        this.tarefas.forEach((tarefa) => {
            if (tarefa.complited == false) {
                contador++;
            }
        });
        return contador;
    }
    limparConcluidas() {
        this.tarefas = this.tarefas.filter((tarefa) => {
            return tarefa.complited == false;
        });
    }
}
//# sourceMappingURL=tarefas.js.map