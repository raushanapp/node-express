import React, { useEffect, useState } from "react";
import styles from "../Styles/pages/editTask.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTaskApiCall } from "../Store/TaskAppReducer/action";

function EditTask() {
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const task=useSelector((state)=>state?.data)

  const handleUpdateTask = (e) => {
    e.preventDefault();

  }
  useEffect(() => {
    if (task?.length === 0 &&id) {
       dispatch(getSingleTaskApiCall(id))
      }
    setUpdateTask(task?.task?.name)
    setIsChecked(task?.task?.completed)
  },[dispatch, id, task])
  // console.log(id, isChecked,task);
  return (
    <form className={styles.formContainer} onSubmit={handleUpdateTask}>
      <div className={styles.headingBox}>
        <h1 className={styles.heading}>Update Task</h1>
      </div>
      <div className={styles.headingId}>
        <h1 className={styles.idText}>{id}</h1>
      </div>
      <div className={styles.editableBox}>
        <div className={styles.updateInput}>
          <input
            type="text"
            placeholder="update Task here..."
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
          />
          <button type="submit">Update</button>
        </div>
        <div className={styles.checkContainer}>
          <label htmlFor="">Completed</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
      </div>
    </form>
  );
}

export default EditTask;
