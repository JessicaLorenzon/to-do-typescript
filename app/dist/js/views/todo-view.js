export class TodoView {
    constructor() {
        this.inputNovaTarefa = document.querySelector('.nova-tarefa');
        this.ul = document.querySelector('.lista-tarefas__adicionadas ul');
    }
    update(tarefas) {
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
    }
    getInputText() {
        return this.inputNovaTarefa.value;
    }
    clearInput() {
        this.inputNovaTarefa.value = '';
    }
}
//# sourceMappingURL=todo-view.js.map