import React from 'react';
import "./Modal.css"

const Modal = ({active, setActive , children}) => {


        return (
            <div className='container'> 
            <div className={active ? "modal active" : "modal"} onClick={() => setActive (false)}>
                <div className={active ? "modal__content" : "modal"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
            
        </div>
            
        );
    
}

export default Modal;