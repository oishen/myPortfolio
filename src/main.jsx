import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './component/ThemeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
