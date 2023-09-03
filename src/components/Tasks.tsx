import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

export function Tasks() {
  const isClicked = true
  return(
    <div className={styles.tasks}>
      {isClicked ?<CheckCircle size={28} weight='fill' className={styles.clickedButton}/> : 
      <Circle size={28} weight='bold' className={styles.notClickedButton}/> }
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash size={22} className={styles.trashSvg}/>
    </div>
  )
}