import React, { useEffect, useState } from "react";
import styles from "../Styles/pages/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createTaskApiCall, getAllTaskApiCall } from "../Store/TaskAppReducer/action";
import { ListTask } from "../Components/Home/ListTask";
function Home() {
  const [createTask, setCreateTask] = useState("");
  const [success, SetSuccess] = useState('');
  const [error, SetError] = useState("");
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const handleSubmitFrom = (event) => {
    event.preventDefault();
    if (createTask) {
      const payload={name:createTask}
      dispatch(createTaskApiCall(payload)).then((res) => {
        console.log(res)
        if (res.type==="CREATE_TASK_SUCCESS"&&res.payload?.success === true) {
          SetSuccess("Task Created Successfully")
          dispatch(getAllTaskApiCall())
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
  useEffect(() => {
    if (data?.length === 0) {
      dispatch(getAllTaskApiCall())
    }
    setTask(data)
  }, [data?.length, task]);
  // console.log(task)
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
      <div className={styles.taskContainer}>
        {task.tasks?.length > 0 && task.tasks.map((el) => (
          <ListTask id={el._id}el={el} />
         ))}
      </div>
    </div>
  );
}

export default Home;
