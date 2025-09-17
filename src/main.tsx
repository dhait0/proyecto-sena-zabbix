import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ProyectoPortafolioSite from "./ProyectoPortafolioSite";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProyectoPortafolioSite />
  </StrictMode>,
)

