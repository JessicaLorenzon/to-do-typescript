import { TodoController } from "./controllers/todo-controller.js"

const controller = new TodoController();

const form = document.querySelector('.lista-tarefas__nova') as HTMLElement;

form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
})