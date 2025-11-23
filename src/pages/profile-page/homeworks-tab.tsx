import { useParams } from 'react-router-dom'
import { useUserContext } from '../../modules/users/hooks/use-user-context'
import styles from './homeworks-tab.module.css'

export const HomeworksTab = () => {
    const { userId } = useParams()
    const { getUserById } = useUserContext()

    const user = userId ? getUserById(userId) : undefined

    if (!user) {
        return <p className={styles.error}>Студент не найден</p>
    }

    return (
        <div className={styles.hw}>
            <h3>Домашние задания</h3>
            <p>Пока нет данных о домашних заданиях.</p>
        </div>
    )
}
