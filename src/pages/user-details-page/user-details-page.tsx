import { Link, Outlet, useParams } from 'react-router-dom'
import styles from './user-details-page.module.css'
import { useUsers } from '../../modules/users/hooks/user-hool'

export function UserDetailsPage() {

  const { userId } = useParams()
  const { getUserById } = useUsers()

  if (!userId) {
    return <div className={styles.placeholder}>Выберите студента, чтобы посмотреть подробности.</div>
  }

  const user = getUserById(userId)

  if (!user) {
    return <div className={styles.placeholder}>Студент с идентификатором {userId} не найден.</div>
  }

  return (
    <>
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
        <p className={styles.note}>
          Посмотреть информацию о пользователе боллее подробно
          <Link to='profile' className={styles.link}>профиль</Link>
        </p>
      </article>
      <Outlet/>
    </>
  )
}

