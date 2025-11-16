import { useUsersContext } from "../../modules/users/hooks/users-hooks";
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import styles from './user-homework-page.module.css';

type Homework = {
  id: number,
  title: string,
  description: string
}
let initialHomeworks: Homework[] = [
  {
    id: 1,
    title: 'папапа',
    description: 'па па па'
  },
  
];
export function HomeWorkPage() {
  const [homeworks, setHomeworks] = useState<Homework[]>(initialHomeworks)
  const [editingHomeworkId, setEditingHomeworkId] = useState<number | null>(null)
  const [newDescription, setNewDescription] = useState('')
  const {getUserById} = useUsersContext()
  const { userId } = useParams()
  if (userId) {
    const user = getUserById(userId)
    if (!user) return <div>Пользователь не найден</div>
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
              
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    )
  }  
}