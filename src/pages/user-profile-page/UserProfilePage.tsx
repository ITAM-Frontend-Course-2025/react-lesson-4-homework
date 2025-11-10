import { useUsers } from "../../modules/users/hooks/user-hool"
import { Link, Outlet, useParams } from 'react-router-dom'
import styles from './user-profile-page.module.css'

const UserProfilePage =()=>{

    const {userId} = useParams()
    const {getUserById} = useUsers()

    const user=getUserById(userId!)

    if (!user) {
        return <div>Пользователь не найден</div>
    }

    const getUserAvatar=(avatarFileName:string)=>{
        return `../../../public/photo/${avatarFileName}`
    }

    return (
        <div className={styles.profile}>
            <h1>Аккаунт пользователя</h1>
            <div className={styles.row}>
                <h2>Профиль: {user.name}</h2>
                <img src={getUserAvatar(user.avatar)} className={styles.image}></img>
            </div>
            <div className={styles.tabContent}>
                <Outlet />
                <Link to='homework' className={styles.link}> чекнуть домашку </Link>
            </div>
        </div>
    )
}

export default UserProfilePage