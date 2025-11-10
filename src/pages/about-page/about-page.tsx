import { PageSection } from '../../shared/ui/page-section'
import styles from './about-page.module.css'

export function AboutPage() {
  return (
    <div className={styles.page}>
      <PageSection title="О курсе" description='лан сори'>
        <p>
          Перед вами учебный проект из домашнего задания. Задача — потренироваться в создании страниц,
          подключении маршрутизатора и работе с компонентами на TypeScript.
        </p>
        <p>
          В приложении есть стартовый экран, раздел со списком студентов, отдельная страница с подробностями
          и обработка ошибок. Всё это поможет понять, как строить простую навигацию в React-приложениях.
        </p>
      </PageSection>

      <PageSection title="Какие навыки тренируем">
        <ul className={styles.list}>
          <li>Настраиваем маршруты и общие макеты через React Router.</li>
          <li>Работаем с компонентами, состоянием и пропсами.</li>
          <li>Используем типы и проверки компилятора из TypeScript.</li>
        </ul>
      </PageSection>
    </div>
  )
}

