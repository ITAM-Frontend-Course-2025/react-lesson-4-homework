import { useParams, Link } from 'react-router-dom' // ← добавить Link
import { getUserById } from '../../modules/users'
import styles from './user-details-page.module.css'

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
      <div className={styles.header}>
        <h3 className={styles.title}>{user.name}</h3>
        <Link 
          to={`/users/${user.id}/profile`} 
          className={styles.profileButton}>
          Профиль
        </Link>
      </div>
      
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
        Здесь могла бы быть расширенная карточка с прогрессом и задачами. Добавьте свою информацию, когда
        будете развивать проект дальше.
      </p>
    </article>
  )
}