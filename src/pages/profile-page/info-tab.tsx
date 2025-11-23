import { useParams } from 'react-router-dom'
import { useUserContext } from '../../modules/users/hooks/use-user-context'
import styles from './info-tab.module.css'

export const InfoTab = () => {
    const { userId } = useParams()
    const { getUserById } = useUserContext()

    const user = userId ? getUserById(userId) : undefined

    if (!user) {
        return <p className={styles.error}>Студент не найден</p>
    }

    return (
        <div className={styles.info}>
            <h3>Основная информация</h3>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Роль:</strong> {user.role === 'mentor' ? 'Ментор' : 'Студент'}</p>
            <p><strong>Любимый модуль:</strong> {user.favouriteModule}</p>
        </div>
    )
}
