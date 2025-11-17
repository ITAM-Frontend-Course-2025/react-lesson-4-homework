import { useParams } from 'react-router-dom'
import { useUsers } from '../../modules/users/hooks/use-users-context'
import styles from './profile-info-page.module.css'

export function ProfileInfo() {
  const { userId } = useParams()
  const { getUserById } = useUsers()
  const user = getUserById(userId!)

  if (!user) return <div>Пользователь не найден</div>

  return (
    <article className={styles.section}> 
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
        <div className={styles.row}>
          <dt>Курс:</dt>
          <dd>{user.course}</dd>
        </div>
      </dl>
    </article>
  )
}