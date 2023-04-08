import React from 'react'
import styles from '../styles/modules/todoItem.module.scss'
import { format } from 'date-fns'
import { MdDelete, MdEdit, MdOutlineClose } from 'react-icons/md'

function TodoItem({ todo }) {
    return (
        <div className={styles.todoContainer}>
            <div className={styles.todoContainer__items}>
                <div className={styles.todoContainer__items__texts}>
                    <h2>{todo.title}</h2>
                    <p>{todo.status}</p>
                    <p>{format(new Date(todo.time), 'p, dd/mm/yyyy')}</p>
                </div>
            </div>
            <div className={styles.todoContainer__icons}>
                <div className={styles.todoContainer__icons__icon}>
                    <MdDelete />
                </div>
                <div className={styles.todoContainer__icons__icon}>
                    <MdEdit />
                </div>
            </div>
        </div>
    )
}

export default TodoItem