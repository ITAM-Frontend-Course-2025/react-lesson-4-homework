import { useParams } from 'react-router-dom'
import { useUsersContext } from '../../modules/users'
import styles from './user-info.module.css'

export function UserInfo() {
  const { getUserById } = useUsersContext();
  const { userId } = useParams();

  const user = getUserById(userId!);

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{user?.name}</h3>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Роль:</dt>
          <dd>{user?.role === 'mentor' ? 'Ментор' : 'Студент'}</dd>
        </div>
        <div className={styles.row}>
          <dt>Любимый модуль:</dt>
          <dd>{user?.favouriteModule}</dd>
        </div>
        <p className={styles.note}>
            {user?.info}
        </p>
      </dl>
    </article>
  )
}