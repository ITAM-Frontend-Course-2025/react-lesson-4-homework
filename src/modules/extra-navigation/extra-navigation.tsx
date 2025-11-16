import { NavLink } from 'react-router-dom'
import styles from './profile-navigation.module.css'

const navItems = [
  { to: '', label: 'Информация' },
  { to: 'homeworks', label: 'Домашние задания' },
]

export function ExtraNavigation() {
  return (
  <nav className={styles.menu}>
    {navItems.map((item) => (
      <NavLink key={item.to} to={item.to} end className={getLinkClassName}>
        {item.label}
      </NavLink>
    ))}
  </nav>
  )
}

const getLinkClassName = ({ isActive }: { isActive: boolean }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link
}