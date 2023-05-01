'use strict';

const form = document.getElementById('tasks-Form');
const taskContent = document.getElementById('tasks-Content');
let taskList = [];

const renderTaskList = () => {
    const taskTemplate = taskList.map(item => `<li><p>${item}</p><span><button>Borrar</button></span></li>`).join('');
    taskContent.innerHTML = taskTemplate;
}

const updateTaskList = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

const deleteTask = (index) => {
    taskList.splice(index, 1);
    updateTaskList();
    renderTaskList();
}

const init = () => {
    taskList = JSON.parse(localStorage.getItem('taskList')) ?? [];
    renderTaskList();


    taskContent.addEventListener('click', (event) => {
        const liElement = event.target.closest('li');
        const buttonElement = event.target.closest('button');

        if (buttonElement && liElement && liElement.parentNode === taskContent) {
            const index = [...taskContent.children].findIndex(li => li.classList.contains('ActionLi'));
            liElement.parentNode.removeChild(liElement);
            deleteTask(index);
        }
        if (liElement && liElement.parentNode === taskContent) {
            liElement.classList.toggle('ActionLi');
        }
    });
    


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = document.getElementById('task-Creator');
        const taskText = task.value.trim();
        if(taskText) {
            taskList.push(taskText);
            updateTaskList();
            renderTaskList();
            task.value = '';
        }
    });
}

init();
