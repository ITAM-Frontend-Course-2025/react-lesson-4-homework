import { useParams } from 'react-router-dom'
import { useUsers } from '../../modules/users/hooks/user-hool'
import styles from './user-homework-page.module.css'

const UserHomeWorkPage =()=>{

    const {userId} = useParams()
    const {getUserById} = useUsers()

    const user = getUserById(userId!)

    if (!user){
        return <div>пользователь не найден</div>
    }

    if (user.mark==null){
        return (
        <div className={styles.homework}>
            <h2>Домашние задания</h2>
            <p>ДЗ: {user.dz1}</p>
            <p>оценка пока что не выставлена</p>
        </div>
    )
    }

    else return (
        <div className={styles.homework}>
            <h2>Домашние задания</h2>
            <p>ДЗ: {user.dz1}</p>
            <p>Оценка: {user.mark}</p>
        </div>
    )
}

export default UserHomeWorkPage