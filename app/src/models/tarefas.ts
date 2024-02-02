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

}