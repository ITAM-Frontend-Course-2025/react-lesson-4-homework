import { useParams } from "react-router-dom"
import { useUsers } from "../../modules/users/hooks/user-hool"
import styles from './user-info-page.module.css'

const UserInfoPage =()=>{

    const {userId} = useParams()
    const {getUserById} = useUsers()
    const user = getUserById(userId!)


    return (
        <div className={styles.container}>
            <h2>информация о пользователе</h2>
            <ul>
                <li>имя: {user?.name}</li>
                <li>роль: {user?.role}</li>
                <li>любимый модуль: {user?.favouriteModule}</li>
            </ul>
        </div>
    )
}

export default UserInfoPage