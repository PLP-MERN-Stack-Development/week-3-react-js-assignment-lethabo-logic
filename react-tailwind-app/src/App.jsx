import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark mode on <html>
    if (darkMode) {
     document.documentElement.classList.add('dark');
// or .remove('dark') depending on state
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 text-sm rounded"
      >
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>

      <p className="text-green-600 font-semibold text-lg">✅ Tailwind is working!</p>

      <div className="flex justify-center gap-4 my-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-bold">Vite + React</h1>

      <div className="card my-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">Click on the logos to learn more</p>

      <div className="mt-8">
        <TaskManager />
      </div>
    </div>
  );
}

export default App;
