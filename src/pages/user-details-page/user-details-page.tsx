import { Link, useParams } from 'react-router-dom';
import { useUsersContext } from '../../modules/users';
import styles from './user-details-page.module.css';

export function UserDetailsPage() {
  const { getUserById } = useUsersContext();
  const { userId } = useParams();

  if (!userId) {
    return <div className={styles.placeholder}>Выберите студента, чтобы посмотреть подробности.</div>
  }

  const user = getUserById(userId);

  if (!user) {
    return <div className={styles.placeholder}>Студент с идентификатором {userId} не найден.</div>
  }

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{user.name}</h3>
      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Роль:</dt>
          <dd>{user.role === 'mentor' ? 'Ментор' : 'Студент'}</dd>
        </div>
        <div className={styles.row}>
          <dt>Любимый модуль:</dt>
          <dd>{user.favouriteModule}</dd>
        </div>
      </dl>
      <Link to={`/users/${user.id}/profile`} className={styles.profileLink}>Открыть профиль</Link>
    </article>
  )
}

