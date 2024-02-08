import { TodoController } from "./controllers/todo-controller.js"

const controller = new TodoController();

const form = document.querySelector('.lista-tarefas__nova') as HTMLElement;
form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
})

const ul = document.querySelector('.lista-tarefas__adicionadas ul') as HTMLElement;
ul.addEventListener('click', e => {
    controller.verificaClick(e);
})

const filtros = document.querySelector('.lista-tarefas__rodape__filtros') as HTMLElement;
filtros.addEventListener('click', (e) => {
    controller.clickFiltros(e);
})

const limparConcluidas = document.querySelector('.lista-tarefas__rodape__limpar-concluidas') as HTMLButtonElement;
limparConcluidas.addEventListener('click', () => {
    controller.limparConcluidas();
})