import React from "react";
import cl from './CommonModal.module.css'
const CommonModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.cModal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.cModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default CommonModal;