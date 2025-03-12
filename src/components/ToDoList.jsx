import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, addTask, toggleComplete, deleteTask, editTask }) {
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim()) {
            addTask(taskInput);
            setTaskInput('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-6">
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-1 border border-gray-300 p-2 rounded"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500">No tasks yet!</p>
            ) : (
                tasks.map(task => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))
            )}
        </div>
    );
}

export default ToDoList;
