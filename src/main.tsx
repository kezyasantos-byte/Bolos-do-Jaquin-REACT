import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/home/Home.tsx'
import ListaProdutos from './pages/listaProdutos/ListaProdutos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListaProdutos />
  </StrictMode>,
)
