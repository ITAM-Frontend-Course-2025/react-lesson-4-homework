import { Outlet } from 'react-router-dom'
import { PageSection } from '../../shared/ui/page-section'
import { ProfileNavigation } from '../../modules/profile-navigation'
import styles from './profile-page.module.css'
export function ProfilePage(){
 return (
  <div className={styles.page}>
   <PageSection title="Профиль">
    <ProfileNavigation />
    <Outlet />
   </PageSection>
  </div>
 )
}