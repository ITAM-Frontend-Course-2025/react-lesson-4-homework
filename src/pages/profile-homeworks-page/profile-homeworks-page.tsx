import { useUsersContext } from "../../modules/users";
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";
import editSrc from '/EditOutlined.svg'
import styles from './profile-homeworks-page.module.css'

type Homework = {
  id: number,
  title: string,
  description: string
}
let initialHomeworks: Homework[] = [
  {
    id: 1,
    title: 'HTML',
    description: 'Мы предлагаем вам сделать "визитку", в которой вы можете рассказать о себе. '
  },
  {
    id: 2,
    title: 'CSS',
    description: 'Вторая домашка будет связана с первой. Вы сделали свой сайт-визитку. Осталось её "раскрасить"!'
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
export function ProfileHomeworksPage() {
  const [homeworks, setHomeworks] = useState<Homework[]>(initialHomeworks)
  const [editingHomeworkId, setEditingHomeworkId] = useState<number | null>(null)
  const [newDescription, setNewDescription] = useState('')
  const {getUserById} = useUsersContext()
  const { userId } = useParams()
  if (userId) {
    const user = getUserById(userId)
    if (!user) return <div>Пользователь не найден</div>
    const handleEditClick = (homework: Homework) => {
      setEditingHomeworkId(homework.id)
      setNewDescription(homework.description)
    }
    const handleCancelClick = () => {
      setEditingHomeworkId(null)
      setNewDescription('')
    }
    const handleSaveClick = (editHomeworkId:number) => {
      const updatedHomeworks = homeworks.map(homework => {
        if (homework.id === editHomeworkId) {
          return { ...homework, description: newDescription };
        }
        return homework;
      });
      setHomeworks(updatedHomeworks)
      setEditingHomeworkId(null)
      setNewDescription('')
    }
    return (
      <div>
        <div className={styles.container}>
          {homeworks.map((homework) =>(
            <div key={homework.id} className={styles.homework}>
              <h2 className={styles.title}>№{homework.id}: {homework.title}</h2>
              {
                homework.id == editingHomeworkId?
                (
                  <div className={styles.inp}>
                    <textarea cols={80} rows={4} autoFocus value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
                    <div className={styles.buttons}>
                      <button onClick={() => handleSaveClick(homework.id)}>Сохранить</button>
                      <button onClick={handleCancelClick}>Отмена</button>
                    </div>
                  </div>
                )
                :(<p className={styles.description}>{homework.description}</p>)
              }
              {
                homework.id == 5 && (homework.id != editingHomeworkId) && (
                  <Link to={`message`} className={styles.messageLink}>Нажми на меня!</Link>
                )
              }
              {
                user.role == 'mentor' && (homework.id != editingHomeworkId) && (
                  <button className={styles.edit} onClick={() => handleEditClick(homework)}><img className={styles.editImg} src={editSrc} alt="edit_image" /></button>
                )
              }
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    )
  }  
}