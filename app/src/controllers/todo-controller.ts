import { Tarefa } from "../models/tarefa.js";
import { Tarefas } from "../models/tarefas.js";
import { TodoView } from "../views/todo-view.js";

export class TodoController {
    tarefas: Tarefas;
    view: TodoView;
    contador: number;

    constructor() {
        this.tarefas = new Tarefas();
        this.view = new TodoView();
        this.contador = 0;
    }

    adiciona() {
        const tarefa = new Tarefa(this.contador, this.view.getInputText());
        this.contador++
        this.tarefas.adicionaTarefa(tarefa);
        this.view.update(this.tarefas);
        this.view.clearInput()
    }

    verificaClick(e: MouseEvent) {
        if (!(e.target instanceof Element)) {
            return
        }

        if (e.target.tagName == 'INPUT') {
            const numeroId = parseInt(e.target.parentElement!.getAttribute('data-id')!);
            this.tarefas.completarTarefa(numeroId);
        }

        if (e.target.tagName == 'IMG') {
            const numeroId = parseInt(e.target.parentElement!.parentElement!.getAttribute('data-id')!);
            this.tarefas.excluirTarefa(numeroId);
        }
        this.view.update(this.tarefas);

    }

    clickFiltros(e: MouseEvent) {
        if (!(e.target instanceof Element)) {
            return
        }

        if(e.target.getAttribute('data-filter') == 'todas') {
            this.tarefas.filter = '';
        }
        if (e.target.getAttribute('data-filter') == 'ativas') {
            this.tarefas.filter = 'ativas';
        }
        if(e.target.getAttribute('data-filter') == 'concluidas') {
            this.tarefas.filter = 'concluidas';
        }
        this.view.update(this.tarefas)
    }

    limparConcluidas() {
        this.tarefas.limparConcluidas();
        this.view.update(this.tarefas);
    }

}