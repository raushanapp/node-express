import React, { useState } from "react";
import styles from "../Styles/pages/editTask.module.css";
import { useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState("");
  console.log(id);
  return (
    <form className={styles.formContainer}>
      <div className={styles.headingId}>
        <h1 className={styles.idText}>{id}</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="update Task here..."
          value={updateTask}
          onChange={(e)=>setUpdateTask(e.target.value)}
        />
      </div>
    </form>
  );
}

export default EditTask;
