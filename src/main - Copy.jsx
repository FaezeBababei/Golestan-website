import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/Zenglish/App/App'
import "./index.css"


createRoot(document.getElementById('App')).render(
  <StrictMode>
    <App/>
    
  </StrictMode>,
)
