import { Tarefa } from "./tarefa.js"

export class Tarefas {

    private tarefas: Array<Tarefa>;

    constructor() {
        this.tarefas = [];
    }

    adicionaTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
    }

    get listaTarefas(): Array<Tarefa> {
        return this.tarefas
    }

    completarTarefa(numeroId: number) {
        this.tarefas.map((tarefa) => {
            if (tarefa.id == numeroId) {
                tarefa.complited = tarefa.complited ? false : true;
            }
            return tarefa;
        })
    }

    excluirTarefa(numeroId: number) {
        this.tarefas = this.tarefas.filter((tarefa) => {
            return tarefa.id !== numeroId;
        })
    }
}