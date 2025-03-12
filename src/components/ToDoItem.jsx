import { useState } from 'react';

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEdit = () => {
        editTask(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <div
            className={`flex items-center justify-between p-2 border-b border-gray-300 ${
                task.completed ? 'line-through text-gray-400' : ''
            }`}
        >
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="flex-1 border border-gray-300 p-1 rounded"
                />
            ) : (
                <span>{task.text}</span>
            )}

            <div className="flex gap-2">
                {isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Save
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => toggleComplete(task.id)}
                            className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteTask(task.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ToDoItem;
