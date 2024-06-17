import React, { useState } from 'react';
import "./Main.css";
import Modal from '../Modal/Modal'; 

const Main = () => {
    const [modalSugarActive, setModalSugarActive] = useState(false);
    const [modalWaxActive, setModalWaxActive] = useState(false);
    const [modalElectroActive, setModalElectroActive] = useState(false);
    return (
        <div className='container'>
           
            <main>
                <button className='open-btn' onClick={() => setModalSugarActive(true)}>Открыть модальное окно 1</button>
                <button className='open-btn' onClick={() => setModalWaxActive(true)}>Открыть модальное окно 2</button>
                <button className='open-btn' onClick={() => setModalElectroActive(true)}>Открыть модальное окно 3</button>
            </main>
            <Modal active={modalSugarActive} setActive={setModalSugarActive}>
                <p>1</p>
            </Modal>
            <Modal active={modalWaxActive} setActive={setModalWaxActive}>
                <p>2</p>
            </Modal>
            <Modal active={modalElectroActive} setActive={setModalElectroActive}>
                <p>3</p>
            </Modal>
        </div>
    );
}

export default Main;
