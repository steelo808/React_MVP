import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const Header = () => {
const [openModal, setOpenModal] =  useState(false);



return (
    <div className ="header">
    <div className="container">
        <nav>
            <h1 className = "logo"><i className="fa-solid fa-spa"></i> KHANBAN</h1>
            <h3><i className="fa-solid fa-person-half-dress"></i> My dashboard</h3>
            <button className = "btn" onClick = {()=>{
                setOpenModal(true);
            }}><i className="fa-solid fa-plus"></i> Add new task</button>
        </nav>
        </div>
        {openModal && <Modal  closeModal ={ setOpenModal }/>}
    </div>
)
}




export default Header
