import { TodoController } from "./controllers/todo-controller.js";
const controller = new TodoController();
const form = document.querySelector('.lista-tarefas__nova');
form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
});
const ul = document.querySelector('.lista-tarefas__adicionadas ul');
ul.addEventListener('click', e => {
    controller.verificaClick(e);
});
const filtros = document.querySelector('.lista-tarefas__rodape__filtros');
filtros.addEventListener('click', (e) => {
    controller.clickFiltros(e);
});
const limparConcluidas = document.querySelector('.lista-tarefas__rodape__limpar-concluidas');
limparConcluidas.addEventListener('click', () => {
    controller.limparConcluidas();
});
//# sourceMappingURL=app.js.map