import { NavLink, Outlet, useParams } from 'react-router-dom' // ← заменить Link на NavLink
import { useUsers } from '../../modules/users/hooks/use-users-context'
import { PageSection } from '../../shared/ui/page-section'
import styles from './user-profile-page.module.css'

export function UserProfilePage() {
  const { userId } = useParams()
  const { getUserById } = useUsers()
  
  const user = getUserById(userId!)

  if (!user) {
    return <div>Пользователь не найден</div>
  }

  return (
    <div className={styles.page}>
      <PageSection title='Профиль:'>
        <nav className={styles.menu}>
          <NavLink 
            to={`/users/${userId}/profile`} 
            end
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
          >
            Информация
          </NavLink>
          <NavLink 
            to={`/users/${userId}/profile/homeworks`} 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
          >
            Домашнее задание
          </NavLink>
        </nav>
        
        <div className={styles.content}>
          <Outlet />
        </div>
      </PageSection>
    </div>
  )
}