import React, { useCallback,memo } from "react";
import styles from '../../Styles/components/listTask.module.css'
import { RiDeleteBin6Line } from "react-icons/ri"
import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTaskApiCall, getSingleTaskApiCall, taskDeleteApiCall } from "../../Store/TaskAppReducer/action";
 const ListTask= ({el,id}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleDeleteTask = useCallback((id) => {
     if (id) {
       dispatch(taskDeleteApiCall(id)).then((res) => {
        //  console.log(res)
         if (res.type === "DELETE_TASK_SUCCESS") {
           dispatch(getAllTaskApiCall())
         }
       })
     }
   }, [dispatch]);
   const handleNavigate = (id) => {
     dispatch(getSingleTaskApiCall(id))
     return navigate(`/edit-task/${id}`)
   }
    return (
      <div key={id} className={styles.listContainer}>
        <p className={styles.title}>{el.name}</p>
        <BiEdit
         onClick={()=>handleNavigate(id)}
          className={styles.editIcons}
        />
        <RiDeleteBin6Line
         onClick={()=>handleDeleteTask(id)}
          className={styles.deleteIcons}
        />
      </div>
   );
   
}
export default memo(ListTask); 