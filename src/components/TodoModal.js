import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import Button from './Button';
import styles from '../styles/modules/modal.module.scss';
import { v4 as uuidv4 } from 'uuid';

function TodoModal({ showModal, setShowModal }) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && status) {
            dispatch(
                addTodo({
                    id: uuidv4(),
                    title,
                    status,
                    time: new Date().toLocaleString(),
                })
            );
            toast.success(`Task added successfully`,
                {
                    style: {
                        fontSize: '1.5rem',
                    },

                }
            );
            handleCloseAndReset();
        } else {
            toast.error(`Task title and status are required`,
                {
                    style: {
                        fontSize: '1.5rem',
                    },

                }
            );
        }
    }
    const handleCloseAndReset = () => {
        setShowModal(false);
        setTitle('');
        setStatus('incomplete');
    };
    return (
        showModal && (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.closeButton}
                        onClick={() => handleCloseAndReset()}
                        onKeyDown={() => handleCloseAndReset()}
                        tabIndex={0}
                        role="button"
                    >
                        <MdOutlineClose />
                    </div>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                        <h2 className={styles.formTitle}>Add Task</h2>
                        <label htmlFor="title">
                            Title
                            <input type="text" id='title' value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                            {title}
                        </label>
                        <label htmlFor="status">
                            Status
                            <select name="status" id="status" value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="incomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className={styles.buttonContainer}>
                            <Button type="submit" variant="primary">
                                Add Task
                            </Button>
                            <Button type="button" variant="secondary"
                                onClick={() => handleCloseAndReset()}
                                onKeyDown={() => handleCloseAndReset()}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}

export default TodoModal
