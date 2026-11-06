import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { TaskContextProvider } from './context/TaskContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <Router>
        <App />
      </Router>
    </TaskContextProvider>
  </StrictMode>,
)
