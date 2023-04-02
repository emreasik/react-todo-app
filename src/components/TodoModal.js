import React, { useState } from 'react';
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';

function TodoModal({ showModal, setShowModal }) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, status });
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
