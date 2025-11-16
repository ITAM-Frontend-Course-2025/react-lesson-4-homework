import { useUsersContext } from "../../modules/users/hooks/users-hooks";
import { useParams } from 'react-router-dom';
import styles from './user-info-page.module.css'

export function ProfileInfoPage(){
  const {getUserById} = useUsersContext();
  const { userId } = useParams()
  if (userId) {
    const user = getUserById(userId)
    if (!user) return <div>Пользователь не найден</div>
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
    </article>
    )
  }
}