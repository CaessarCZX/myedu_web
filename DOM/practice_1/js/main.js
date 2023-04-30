'use strict';

let toDoList = [];
toDoList = JSON.parse(localStorage.getItem('toDoList')) ?? [];
const form = document.getElementById('toDo-form');

const render = () => {
    const toDoContent = document.getElementById('toDo-Content');
    const toDoTemplate = toDoList.map(item => '<li>' + item + '</li>');
    toDoContent.innerHTML = toDoTemplate.join('');
    const elements = document.querySelectorAll('#toDo-Content li');
    elements.forEach((element, i) => {
        element.addEventListener('click', () => {
            element.parentNode.removeChild(element);
            toDoList.splice(i, 1);
            updateToDoList(toDoList);
            render();
        });
    });
}

const updateToDoList = (toDoList) => {
    const toDoString = JSON.stringify(toDoList);
    localStorage.setItem('toDoList', toDoString);
}

form.onsubmit = (event) => {
    event.preventDefault();
    
    const toDo = document.getElementById('toDo');
    const toDoText = toDo.value;
    toDo.value = '';
    toDoList.push(toDoText);
    updateToDoList(toDoList);
    render();
}
// Init();
render();