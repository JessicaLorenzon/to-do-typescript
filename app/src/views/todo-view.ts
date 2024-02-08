import { Tarefas } from "../models/tarefas.js";

export class TodoView {
    inputNovaTarefa: HTMLInputElement;
    ul: HTMLElement;
    pendentes: HTMLElement;
    btnTodas: HTMLButtonElement;
    btnAtivas: HTMLButtonElement;
    btnConcluidas: HTMLButtonElement;

    constructor() {
        this.inputNovaTarefa = document.querySelector('.nova-tarefa') as HTMLInputElement;
        this.ul = document.querySelector('.lista-tarefas__adicionadas ul') as HTMLElement;
        this.pendentes = document.querySelector('.lista-tarefas__rodape__pendentes') as HTMLElement;
        this.btnTodas = document.querySelector('[data-filter="todas"]') as HTMLButtonElement;
        this.btnAtivas = document.querySelector('[data-filter="ativas"]') as HTMLButtonElement;
        this.btnConcluidas = document.querySelector('[data-filter="concluidas"]') as HTMLButtonElement;
    }

    update(tarefas: Tarefas) {
        document.querySelector('.lista-tarefas__rodape')!.classList.remove('hidden');
        let html = '';

        tarefas.listaTarefas.forEach((tarefa) => {

            html += `
            <li class="lista-tarefas__adicionadas__tarefa ${tarefa.complited ? "lista-tarefas__adicionadas__tarefa--concluida" : ""}" data-id="${tarefa.id}">
            <input type="checkbox" class="checkbox" ${tarefa.complited ? "checked" : ""}>
            <p class="lista-tarefas__adicionadas__tarefa-descricao">${tarefa.description}</p>
            <button class="close"><img src="./images/icon-cross.svg"></button>
            </li>
            `
        })
        this.ul.innerHTML = html;

        this.pendentes.innerHTML = `<p class="lista-tarefas__rodape__pendentes">${tarefas.contadorPendentes()} tarefas pendentes</p>`;


        document.querySelector('.lista-tarefas__rodape__filtros__btn--active')!.classList.remove('lista-tarefas__rodape__filtros__btn--active');
        
        if(tarefas.filter == '') {
            this.btnTodas.classList.add('lista-tarefas__rodape__filtros__btn--active');
        }
        if(tarefas.filter == 'ativas'){
            this.btnAtivas.classList.add('lista-tarefas__rodape__filtros__btn--active');
        }
        if(tarefas.filter == 'concluidas'){
            this.btnConcluidas.classList.add('lista-tarefas__rodape__filtros__btn--active');
        }
 
    }

    getInputText() {
        return this.inputNovaTarefa.value;
    }

    clearInput() {
        this.inputNovaTarefa.value = '';
    }
}