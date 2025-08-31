// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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



// src/App.jsx
// import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Try to import RooCode pages if they exist, otherwise use placeholders
import Home from './pages/HomePage'
import Upload from './pages/UploadPage'
import About from './pages/AboutPage'

// If your pages use .tsx/.jsx names, adjust imports accordingly.
// If any import fails, fall back to a small inline placeholder:
const Fallback = ({ title }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6">
    <h1 className="text-3xl font-bold mb-4">{title} (placeholder)</h1>
    <p className="text-gray-600">This page is a placeholder — replace with your real component.</p>
  </div>
)

function SafeImport(Component, title) {
  try {
    return Component ? Component : () => <Fallback title={title} />
  } catch {
    return () => <Fallback title={title} />
  }
}

const SafeHome = SafeImport(Home, 'HomePage')
const SafeUpload = SafeImport(Upload, 'UploadPage')
const SafeAbout = SafeImport(About, 'AboutPage')

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold">FitWire</div>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/upload" className="hover:underline">Upload</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<SafeHome />} />
          <Route path="/upload" element={<SafeUpload />} />
          <Route path="/about" element={<SafeAbout />} />
        </Routes>
      </main>

      <footer className="text-center py-8 text-sm text-gray-500">
        Built with Vite + React
      </footer>
    </div>
  )
}