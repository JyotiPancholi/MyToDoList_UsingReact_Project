import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        ));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Header />
            <ToDoList
                tasks={tasks}
                addTask={addTask}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </div>
    );
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// function App() {
//   return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-3xl font-bold">
//           Tailwind CSS is Working!
//       </div>
//   );
// }

export default App;
