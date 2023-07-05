import React, { useEffect, useState } from "react";
import styles from "../Styles/pages/home.module.css";
import { useDispatch } from "react-redux";
import { createTaskApiCall } from "../Store/TaskAppReducer/action";
function Home() {
  const [createTask, setCreateTask] = useState("");
  const [success, SetSuccess] = useState('');
  const [error, SetError] = useState("");
  const dispatch = useDispatch();
  const handleSubmitFrom = (event) => {
    event.preventDefault();
    if (createTask) {
      const payload={name:createTask}
      dispatch(createTaskApiCall(payload)).then((res) => {
        console.log(res)
        if (res.payload?.success === true) {
          SetSuccess("Task Created Successfully")
          setTimeout(() => {
            SetSuccess("")
          },2000)
        } else {
          SetError(res.payload.msg)
           setTimeout(() => {
             SetError("");
           }, 2000);
        };
      });
      setCreateTask("")
    }
  };
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Task Manager</h1>
      </div>
      <form
        action=""
        className={styles.createTaskContainer}
        onSubmit={handleSubmitFrom}
      >
        <input
          type="text"
          name="task"
          placeholder="Enter task here... "
          value={createTask}
          onChange={(e) => setCreateTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
        {success ? (
          <p className={styles.success}>{ success}</p>
        ) : (
            <p className={styles.error}>{error}</p>
        )}
      </form>
      {/* all task component */}
    </div>
  );
}

export default Home;
