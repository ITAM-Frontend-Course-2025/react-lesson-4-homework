import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'
import { UsersProvider } from '../modules/users';

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Корневой элемент не найден')
}

createRoot(rootElement).render(
  <StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </StrictMode>
)

