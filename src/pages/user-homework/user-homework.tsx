import { useParams } from 'react-router-dom'
import { useUsersContext } from '../../modules/users'
import styles from './user-homework.module.css'

export function UserHomework() {
  const { getUserById } = useUsersContext();
  const { userId } = useParams();

  const user = getUserById(userId!);

  if (user?.role === 'student') {
        return (
            <article className={styles.card}>
            <h3 className={styles.title}>{user?.homeworkName}</h3>
            <dl className={styles.list}>
                <div className={styles.row}>
                <dt>Домашка:</dt>
                <dd>{user?.favouriteModule}</dd>
                </div>
                <div className={styles.row}>
                <dt>Статус:</dt>
                <dd>{user?.homeworkStatus === 'complete' ? 'Выполнена' : 'В процессе...'}</dd>
                </div>
                <p className={styles.note}>
                    {user?.homeworkDescription}
                </p>
            </dl>
            </article>
        )
    }
    else {
        return (
            <article className={styles.card}>
            <p className={styles.note}>
                    Преподаватели не делают домашку за студентов :D
            </p>
            </article>
        )
    }
}