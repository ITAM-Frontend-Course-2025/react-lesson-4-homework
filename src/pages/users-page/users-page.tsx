import { Link, Outlet } from 'react-router-dom'
import { PageSection } from '../../shared/ui/page-section'
import { getUsers } from '../../modules/users'
import styles from './users-page.module.css'

export function UsersPage() {
  const users = getUsers()

  return (
    <div className={styles.page}>
      <PageSection title="Список студентов">
        <p>
          Это пример вложенного маршрута: список отображается слева, а выбранный студент — справа. Такую
          схему часто используют для личных кабинетов и админок.
        </p>
        <div className={styles.grid}>
          <ul className={styles.list}>
            {users.map((user) => (
              <li key={user.id} className={styles.item}>
                <Link to={user.id} className={styles.link}>
                  <span className={styles.name}>{user.name}</span>
                  <span className={styles.role}>{user.role === 'mentor' ? 'Ментор' : 'Студент'}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.details}>
            <Outlet />
          </div>
        </div>
      </PageSection>
    </div>
  )
}

