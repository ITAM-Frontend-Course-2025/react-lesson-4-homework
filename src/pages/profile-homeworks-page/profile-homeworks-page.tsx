import { useParams } from 'react-router-dom'
import { useUsers } from '../../modules/users/hooks/use-users-context'
import styles from './profile-homeworks-page.module.css'

export function ProfileHomeworks() {
  const { userId } = useParams()
  const { getUserById } = useUsers()
  const user = getUserById(userId!)

  console.log('User:', user) // ← добавить для отладки
  console.log('Homeworks:', user?.homeworks)

  if (!user) return <div>Пользователь не найден</div>

  if (!user.homeworks || user.homeworks.length === 0) {
    return (
      <article className={styles.section}>
        <p>Нет домашних заданий</p>
      </article>
    )
  }

  return (
    <article className={styles.section}>
      <dl className={styles.list}>
        {user.homeworks.map((homework, index) => (
          <div key={index} className={styles.row}>
            <dt>{homework.title}</dt>
            <dd>
              <span className={`${styles.status} ${styles[homework.status]}`}>
                {getStatus(homework.status)}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

function getStatus(status: string) {
  if (status === 'completed') return 'Принято'
  if (status === 'in-progress') return 'В процессе'
  return 'Не начато'
}