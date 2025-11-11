import { Link } from 'react-router-dom'
import { PageSection } from '../../shared/ui/page-section'
import styles from './home-page.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <PageSection
        title="Мини-приложение с роутером"
        description="Эта стартовая страница рассказывает, что ещё можно посмотреть внутри проекта.">
        <p>
          Мы собрали несколько экранов, чтобы показать, как пользоваться React Router: есть статические,
          вложенные и динамические маршруты. Попробуйте перейти по ссылкам ниже и посмотрите, как меняется
          содержимое без перезагрузки страницы.
        </p>
      </PageSection>

      <PageSection title="Навигация по приложению">
        <ul className={styles.list}>
          <li>
            Загляните на страницу <Link to="/about">«О курсе»</Link>, чтобы прочитать короткое описание
            проекта.
          </li>
          <li>
            Перейдите в раздел <Link to="/users">«Список студентов»</Link> и выберите карточку, чтобы
            увидеть работу маршрута с параметром.
          </li>
          <li>
            Введите любой несуществующий адрес и убедитесь, что показывается страница с ошибкой.
          </li>
        </ul>
      </PageSection>
    </div>
  )
}

