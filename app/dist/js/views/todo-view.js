export class TodoView {
    constructor() {
        this.inputNovaTarefa = document.querySelector('.nova-tarefa');
        this.ul = document.querySelector('.lista-tarefas__adicionadas ul');
        this.pendentes = document.querySelector('.lista-tarefas__rodape__pendentes');
        this.btnTodas = document.querySelector('[data-filter="todas"]');
        this.btnAtivas = document.querySelector('[data-filter="ativas"]');
        this.btnConcluidas = document.querySelector('[data-filter="concluidas"]');
    }
    update(tarefas) {
        document.querySelector('.lista-tarefas__rodape').classList.remove('hidden');
        let html = '';
        tarefas.listaTarefas.forEach((tarefa) => {
            html += `
            <li class="lista-tarefas__adicionadas__tarefa ${tarefa.complited ? "lista-tarefas__adicionadas__tarefa--concluida" : ""}" data-id="${tarefa.id}">
            <input type="checkbox" class="checkbox" ${tarefa.complited ? "checked" : ""}>
            <p class="lista-tarefas__adicionadas__tarefa-descricao">${tarefa.description}</p>
            <button class="close"><img src="./images/icon-cross.svg"></button>
            </li>
            `;
        });
        this.ul.innerHTML = html;
        this.pendentes.innerHTML = `<p class="lista-tarefas__rodape__pendentes">${tarefas.contadorPendentes()} tarefas pendentes</p>`;
        document.querySelector('.lista-tarefas__rodape__filtros__btn--active').classList.remove('lista-tarefas__rodape__filtros__btn--active');
        if (tarefas.filter == '') {
            this.btnTodas.classList.add('lista-tarefas__rodape__filtros__btn--active');
        }
        if (tarefas.filter == 'ativas') {
            this.btnAtivas.classList.add('lista-tarefas__rodape__filtros__btn--active');
        }
        if (tarefas.filter == 'concluidas') {
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
//# sourceMappingURL=todo-view.js.map