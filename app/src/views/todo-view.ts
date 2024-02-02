import { Tarefas } from "../models/tarefas.js";

export class TodoView {
    ul: HTMLElement;

    constructor() {
        this.ul = document.querySelector('.lista-tarefas__adicionadas ul') as HTMLElement;
    }

    update(tarefas: Tarefas) {
        let html = '';

        tarefas.listaTarefas.forEach((tarefa) => {
            html += `
            <li class="lista-tarefas__adicionadas__tarefa">
            <input type="checkbox" class="checkbox">
            <p class="lista-tarefas__adicionadas__tarefa-descricao">${tarefa.description}</p>
            <button class="close"><img src="./images/icon-cross.svg"></button>
            </li>
            `
        })
        this.ul.innerHTML = html;
    }
}