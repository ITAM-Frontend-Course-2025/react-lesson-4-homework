import { useParams } from 'react-router-dom'
import { getUserById } from '../../modules/users'
import styles from './profile-page.module.css'
import { Link, Outlet } from 'react-router-dom'
import { PageSection } from '../../shared/ui/page-section'
import { useUserContext } from '../../modules/users/hooks/use-user-context'

export function UserProfilePage() {
    const { userId } = useParams()
    const { getUserById } = useUserContext()
    const user = userId ? getUserById(userId) : undefined

    if (!user) {
        return <p className={styles.error}>Студент не найден</p>
    }

    return (
        <div className={styles.page}>
            <PageSection title={`Профиль студента: ${user.name}`}>
                <div className={styles.grid}>
                    <ul className={styles.list}>
                        <Link to="info" className={styles.link}>
                            Информация
                        </Link>
                        <Link to="homeworks" className={styles.link}>
                            Домашки
                        </Link>
                    </ul>
                    <div className={styles.details}>
                        <Outlet />
                    </div>
                </div>
            </PageSection>
        </div>
    )
}