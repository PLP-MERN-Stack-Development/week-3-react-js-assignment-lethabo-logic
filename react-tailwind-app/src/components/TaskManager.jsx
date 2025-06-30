import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [taskFilter, setTaskFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (taskFilter === 'completed') return task.completed;
    if (taskFilter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-xl mx-auto bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">📝 Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border px-2 py-1 rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 dark:hover:bg-blue-400">
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setTaskFilter('all')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">All</button>
        <button onClick={() => setTaskFilter('active')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Active</button>
        <button onClick={() => setTaskFilter('completed')} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Completed</button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
