import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'

const navItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/about', label: 'О курсе' },
  { to: '/users', label: 'Список пользователей' },
]

export function Navigation() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>React Router Showcase</h1>
      <nav className={styles.menu}>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={getLinkClassName}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

function getLinkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link
}
