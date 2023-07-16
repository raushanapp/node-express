import React, { useEffect, useState } from "react";
import styles from "../Styles/pages/editTask.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTaskApiCall,
  getSingleTaskApiCall,
  updateTaskApiCall,
} from "../Store/TaskAppReducer/action";

function EditTask() {
  const { id } = useParams();
  const [updateTask, setUpdateTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showSuccess, SetShowSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state?.data);

  const handleUpdateTask = (event) => {
    event.preventDefault();
    if (isChecked && updateTask) {
      // console.log(isChecked, updateTask, "up...");
      const payload = {
        name: updateTask,
        completed: isChecked,
        _id: id,
      };
      dispatch(updateTaskApiCall(payload)).then((res) => {
        // console.log(res);
        if (res.type === 'UPDATE_TASK_SUCCESS' && res.payload.success === true) {
          setError(true);
          SetShowSuccess(true);
          setTimeout(() => {
            setError(false);
            SetShowSuccess(false);
            dispatch(getAllTaskApiCall());
            navigate("/")
          }, 2000);
          
        } else {
          setError(true);
          SetShowSuccess(false);
          setTimeout(() => {
            setError(false)
            // SetShowSuccess(false);
          },2000)
        }
      
      });
    }
  };
  useEffect(() => {
    if (task?.length === 0 && id) {
      dispatch(getSingleTaskApiCall(id));
    }
    setUpdateTask(task?.task?.name);
    setIsChecked(task?.task?.completed);
  }, [dispatch, id, task]);
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
          <button type="submit" className={styles.btn}>
            Update
          </button>
        </div>
        <div className={styles.checkContainer}>
          <label htmlFor="">Completed</label>
          <input
            className={styles.chekBox1}
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        {/* after updateing then showing success fully update */}
        {error ? (
          <div className={styles.success}>
            {showSuccess ? (
              <p className={styles.message}>Successfully Updated</p>
            ) : (
              <p className={styles.error}>
                Something went wrong please try again
              </p>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default EditTask;
