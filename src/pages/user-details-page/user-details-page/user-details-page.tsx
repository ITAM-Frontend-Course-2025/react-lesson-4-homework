import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { getUserById } from '../../../modules/users'
import styles from './user-details-page.module.css'

export function UserDetailsPage() {
    const { userId } = useParams<string>()
    const location = useLocation()

    if (!userId) {
    return <div className={styles.placeholder}>Выберите студента, чтобы посмотреть подробности.</div>
    }

    const user = getUserById(userId)

    if (!user) {
    return <div className={styles.placeholder}>Студент с идентификатором {userId} не найден.</div>
    }

    return (
    <article className={styles.card}>
        <h3 className={styles.title}>
            <Link
                className={styles.link}
                to={'profile'}
                state={userId}
            >
                {user.name}
            </Link>
        </h3>

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

        {!location.pathname.includes('/profile') && (
            <div className={styles.additional}>
                <Link
                    className={styles.additionalLink}
                    to={'profile'}
                    state={userId}
                >
                    Больше информации
                </Link>
            </div>
        )}


        <Outlet />

    </article>
    )
}

