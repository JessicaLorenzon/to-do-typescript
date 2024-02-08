import { Tarefa } from "./tarefa.js"

export class Tarefas {

    private tarefas: Array<Tarefa>;
    private _filter: string;

    constructor() {
        this.tarefas = [];
        this._filter = '';
    }

    get filter() : string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
    }

    adicionaTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
    }

    get listaTarefas(): Array<Tarefa> {
        return this.tarefas.filter((tarefa) => {
            if(this._filter == 'ativas') {
                return tarefa.complited == false;
            }
            if(this._filter == 'concluidas') {
                return tarefa.complited == true;
            }
            return true
        })
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

    contadorPendentes() {
        let contador = 0;
        this.tarefas.forEach((tarefa) => {
            if(tarefa.complited == false) {
               contador++;
            }
        })
        return contador;
    }

    limparConcluidas() {
        this.tarefas = this.tarefas.filter((tarefa) => {
            return tarefa.complited == false;
        })
    }
}