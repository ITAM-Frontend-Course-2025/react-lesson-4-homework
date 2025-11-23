import { Outlet, useParams } from 'react-router-dom'
import { getUserById } from '../../modules/users'
import styles from './user-details-page.module.css'
import { Link } from 'react-router-dom'

export function UserDetailsPage() {
  const { userId } = useParams()

  if (!userId) {
    return <div className={styles.placeholder}>Выберите студента, чтобы посмотреть подробности.</div>
  }

  const user = getUserById(userId)

  if (!user) {
    return <div className={styles.placeholder}>Студент с идентификатором {userId} не найден.</div>
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{user.name}</h3>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Статус:</dt>
          <dd>{user.role === 'mentor' ? 'Ментор' : 'Студент'}</dd>
        </div>
        <div className={styles.row}>
          <dt>Любимый модуль:</dt>
          <dd>{user.favouriteModule}</dd>
        </div>
      </dl>
      <Link to="profile" className={styles.profileLink}>
        Перейти в профиль
      </Link>
      <Outlet />
    </article>
  )
}

