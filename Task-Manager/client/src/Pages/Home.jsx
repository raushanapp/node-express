import React from 'react'
import styles from "../Styles/pages/home.module.css"
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Task Manager</h1>
      </div>
      <div className={styles.createTaskContainer}>
        <form action="">
          <input type="text" />
          <button type='submit'>create</button>
        </form>
      </div>
      {/* all task component */}
      
    </div>
  )
}

export default Home