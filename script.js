function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.onclick = () => li.classList.toggle('completed');
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
