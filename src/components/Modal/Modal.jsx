import React from 'react'
import './Modal.css'

const Modal = ({active , setActive, children}) => {

  return (
    <div className={ active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={ active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
          <div className="modal__header"><button className="btn-close" onClick={() => setActive(false)}>X</button></div>
          
          {children}
          
      </div>
    </div>
  )
}

export default Modal
