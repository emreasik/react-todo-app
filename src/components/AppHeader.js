import React, { useState } from 'react'
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss'
import TodoModal from './TodoModal';

function AppHeader() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.app__wrapper__header} >
            <Button variant="primary" onClick={() => { setShowModal(true) }}>Add Task</Button>
            <SelectButton>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
            <TodoModal showModal={showModal} setShowModal={setShowModal}></TodoModal>
        </div>
    )
}

export default AppHeader;