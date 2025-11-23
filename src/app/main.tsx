import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'
import { UserProvider } from '../modules/users/context/user-provider'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Корневой элемент не найден')
}

createRoot(rootElement).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
)

