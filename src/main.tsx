import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { TaskContextProvider } from './context/TaskContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <ReactQueryDevtools />
        </Router>
      </QueryClientProvider>
    </TaskContextProvider>
  </StrictMode>,
)
