import { Tarefa } from "../models/tarefa.js";
import { Tarefas } from "../models/tarefas.js";
import { TodoView } from "../views/todo-view.js";

export class TodoController {
    tarefas: Tarefas;
    view: TodoView;
    contador: number;

    constructor () {
        this.tarefas = new Tarefas();
        this.view = new TodoView();
        this.contador = 0; 
    }

    adiciona() {
        const tarefa = new Tarefa(this.contador, this.view.getInputText());
        this.contador++
        this.tarefas.adicionaTarefa(tarefa);
        // console.log(this.tarefas);
        this.view.update(this.tarefas);
        this.view.clearInput()
    }

    verificaClick(e: MouseEvent) {
        if (!(e.target instanceof Element)) {
            return
        }

        if(e.target.tagName == 'INPUT') {
            const numeroId = parseInt(e.target.parentElement!.getAttribute('data-id')!);
            this.tarefas.completarTarefa(numeroId);
        }

        if(e.target.tagName == 'IMG') {
            const numeroId = parseInt(e.target.parentElement!.parentElement!.getAttribute('data-id')!);
            this.tarefas.excluirTarefa(numeroId);
        }

        this.view.update(this.tarefas);
    }
    
}