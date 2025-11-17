import { Link, Outlet, useParams } from "react-router-dom";

import { useUsersContext} from "../../modules/users/hooks/users-hooks"
import { PageSection } from "../../shared/ui/page-section";
import styles from './profile.module.css';

export function ProfilePage () {
    const { getUserById } = useUsersContext();
    const { userId } = useParams();

    const user = getUserById(userId!);

    return (
            <PageSection title={`Профиль пользователя ${user?.name}`}>
                <div className={styles.page}>
                    <div className={styles.grid}>
                        <ul className={styles.list}>
                            <li key={'info'}>
                                <Link to={`info`} className={styles.link}>Информация о пользователе</Link>
                            </li>
                            <li key={'homewors'}>
                                <Link to={`homeworks`} className={styles.link}>Домашнее задание</Link>
                            </li>
                            <li>
                                <Link to={`/users/${user?.id}`} className={styles.link_userList}>Вернуться к списку пользователей</Link>
                            </li>
                        </ul>
                        <div className={styles.details}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </PageSection>
     
    );
}