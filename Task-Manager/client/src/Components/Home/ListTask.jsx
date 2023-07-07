import React from "react";
import styles from '../../Styles/components/listTask.module.css'
import {RiDeleteBin6Line} from "react-icons/ri"
export const ListTask = ({el,id}) => {

    return (
      <div key={id} className={styles.listContainer}>
        <p className={styles.title}>{el.name}</p>
        <button className={styles.btnEdit}>
          <RiDeleteBin6Line />
        </button>
        <button className={styles.btnDelete}></button>
      </div>
    );
}