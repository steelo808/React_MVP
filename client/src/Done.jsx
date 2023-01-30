import React from 'react';

const Done = () =>{
    return(
        <div className = "section done">
        <h1><div className = "status-circle"></div>Done</h1>
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

export default Done;