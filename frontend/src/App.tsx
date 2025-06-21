import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-md mx-auto p-8 text-center">
      <div className="flex justify-center items-center gap-10 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind</h1>

      <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Edit <code className="font-mono text-sm bg-gray-100 px-1 rounded">src/App.tsx</code> and save to test HMR.
        </p>
      </div>

      <p className="text-sm text-red-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
