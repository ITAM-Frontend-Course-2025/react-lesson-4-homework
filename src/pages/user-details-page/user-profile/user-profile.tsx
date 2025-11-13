import styles from './user-profile.module.css'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const UserProfile = () => {
    const { state } = useLocation()

    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <div className={styles.option}>
                    <Link
                        to={'info'}
                        className={styles.optionLink}
                        state={state}
                    >
                        Информация
                    </Link>
                </div>
                <div className={styles.option}>
                    <Link
                        to={'homeworks'}
                        className={styles.optionLink}
                        state={state}
                    >
                        Домашки
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}