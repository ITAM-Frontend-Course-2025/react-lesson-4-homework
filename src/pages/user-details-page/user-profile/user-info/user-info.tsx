import { useLocation } from 'react-router-dom'
import { useUsersContext } from '../../../../modules/hooks'
import styles from '../../user-details-page/user-details-page.module.css'

type UserInfoPageProps = {
    isInfo: boolean
}

export const UserInfoPage = (props:UserInfoPageProps) => {
    const {
        isInfo
    } = props

    const { state } = useLocation()
    const { getUserById } = useUsersContext()

    const userData = getUserById(state)

    return (
        <article className={styles.card}>
            <dl className={styles.list}>
                <div className={styles.row}>
                    <dt>{isInfo ? 'Опыт:' : 'Кол-во сделанных домашек:'}</dt>
                    {isInfo
                        ? (
                            <dd>{userData?.experience}</dd>
                        )
                        : (
                            <dd>{userData?.homeworkHasDone}</dd>
                        )
                    }
                </div>

                <div className={styles.row}>
                    <dt>{isInfo ? 'Доп информация:' : 'Уровень:'}</dt>
                    {isInfo
                        ? (
                            <dd>{userData?.mockInformation}</dd>
                        )
                        : (
                            <dd>{userData?.level}</dd>
                        )
                    }
                </div>
            </dl>
        </article>
    )
}