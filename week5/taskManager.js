function taskManager () {
    let tasks = [];
    let idCounter = 0;
    let priorityOrder = {"High": 3, "Medium": 2, "Low": 1};
    return {
        addTask: function (task, priority) {
            tasks.push({id: idCounter++, task, priority});
            tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        },
        removeTask: function (id) {
            tasks = tasks.filter(task => task.id !== id);
        },
        getTasks: function () {
            return tasks.map(task => task.task);
        }
    }
}