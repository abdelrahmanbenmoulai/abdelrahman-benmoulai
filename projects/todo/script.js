function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            li.remove();
        };

        span.onclick = function () {
            span.classList.toggle('completed');
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = '';
    }
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});