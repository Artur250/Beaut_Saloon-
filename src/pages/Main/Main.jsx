import React, { useState } from 'react';
import './Main.css';
import Modal from '../Modal/Modal'; 
import Sugar_depi from '../../assets/Sugar-img.jpeg';
import Woxe_depi from '../../assets/woxe-img.jpeg'
import Electro_depi from '../../assets/Elektro.webp'

const Main = () => {
    const [modalSugarActive, setModalSugarActive] = useState(false);
    const [modalWaxActive, setModalWaxActive] = useState(false);
    const [modalElectroActive, setModalElectroActive] = useState(false);

    return (
        <div className='container'>
            <main className='modal-main'>
                <div className='Sugar-dep'>
                    <img className='img_dep' src={Sugar_depi} alt="Sugar depilation" />
                    <button className='open-btn' onClick={() => setModalSugarActive(true)}>Sugar depilation</button>
                </div>
                <div  className='Wax-dep'>
                    <img className='img_dep' src={Woxe_depi} alt="Wax depilation" />
                    <button className='open-btn' onClick={() => setModalWaxActive(true)}>Wax depilation</button>
                </div>
                <div className='Electro-dep'>
                    <img className='img_dep' src={Electro_depi} alt="Electrolysis" />
                    <button className='open-btn' onClick={() => setModalElectroActive(true)}>Electrolysis</button>
                </div>
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
