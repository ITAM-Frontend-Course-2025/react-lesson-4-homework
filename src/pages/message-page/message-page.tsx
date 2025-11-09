import styles from './message-page.module.css'
import catSrc from '../../../public/cat.jpg'

export function MessagePage() {
 return (
  <div>
   <h1>Пожалуйста!! Проверьте 5 домашку</h1>
   <img className={styles.image} src={catSrc} alt="Cat" />
  </div>
 )
}