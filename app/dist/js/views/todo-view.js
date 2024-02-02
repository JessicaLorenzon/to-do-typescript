export class TodoView {
    constructor() {
        this.ul = document.querySelector('.lista-tarefas__adicionadas ul');
    }
    update(tarefas) {
        let html = '';
        tarefas.listaTarefas.forEach((tarefa) => {
            html += `
            <li class="lista-tarefas__adicionadas__tarefa">
            <input type="checkbox" class="checkbox">
            <p class="lista-tarefas__adicionadas__tarefa-descricao">${tarefa.description}</p>
            <button class="close"><img src="./images/icon-cross.svg"></button>
            </li>
            `;
        });
        this.ul.innerHTML = html;
    }
}
//# sourceMappingURL=todo-view.js.map