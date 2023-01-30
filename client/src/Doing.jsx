import React from 'react';

const Doing = () =>{
    return(
        <div className = "section doing">
        <h1><div className = "status-circle"></div>Doing</h1>
        <div className= "card">
        <h3>header text</h3>
        <p>description text</p>
        <div className ="card-icons">
        <i className="fa-solid fa-trash-can"></i>
        <i className="fa-solid fa-pencil"></i>
        </div>
        </div>
        </div>
    )
}

export default Doing;