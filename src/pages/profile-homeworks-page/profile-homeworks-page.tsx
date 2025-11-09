import styles from './profile-homeworks-page.module.css'
import { Link, Outlet } from 'react-router-dom';

type Homework = {
  id: number,
  title: string,
  description: string
}
export function ProfileHomeworksPage() {
  const homeworks: Homework[] = [
    {
      id: 1,
      title: 'HTML',
      description: 'Мы предлагаем вам сделать "визитку", в которой вы можете рассказать о себе. '
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Вторая домашка будет связана с первой. Вы сделали свой сайт-визитку. Осталось её "расскрасить"!'
    },
    {
      id: 3,
      title: 'JS',
      description: 'Практикуем алгоритмические задачи на JavaScript.'
    },
    {
      id: 4,
      title: 'TS',
      description: 'Практикуем типизацию на TypeScript.'
    },
    {
      id: 5,
      title: 'Проекты',
      description: 'Создаем собственный проект, используя все изученные темы.'
    }
  ];
  return (
    <div>
      <div className={styles.container}>
        {homeworks.map((homework) =>(
          <div key={homework.id} className={styles.homework}>
            <h2 className={styles.title}>№{homework.id}: {homework.title}</h2>
            <p className={styles.description}>{homework.description}</p>
            {
              homework.id == 5 && (
                <Link to={`message`} className={styles.messageLink}>Нажми на меня!</Link>
              )
            }
          </div>
        ))}
      </div>
      <Outlet />
    </div>
    
  )
  
}