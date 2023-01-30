import React from 'react';


const Todo = () =>{
    
    return(
        <div className = "section todo">
        <div className ="status">
        <div className ="status-circle"></div>
        <h1>TO-DO</h1>
        </div>
        <div className= "card">
        <h3>Header text</h3>
        <p>description text</p>
        <div className ="card-icons">
        <i className="fa-solid fa-trash-can"></i>
        <i className="fa-solid fa-pencil"></i>
        </div>
        </div>
        </div>
    )
}

export default Todo;