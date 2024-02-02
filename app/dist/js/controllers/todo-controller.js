import { Tarefa } from "../models/tarefa.js";
import { Tarefas } from "../models/tarefas.js";
import { TodoView } from "../views/todo-view.js";
export class TodoController {
    constructor() {
        this.inputNovaTarefa = document.querySelector('.nova-tarefa');
        this.tarefas = new Tarefas();
        this.view = new TodoView();
    }
    adiciona() {
        const tarefa = new Tarefa(1, this.inputNovaTarefa.value);
        this.tarefas.adicionaTarefa(tarefa);
        console.log(this.tarefas);
        this.inputNovaTarefa.value = '';
        this.view.update(this.tarefas);
    }
}
//# sourceMappingURL=todo-controller.js.map