import express from 'express';
import React from 'react'
import { useState } from 'react';



const Modal = ({ closeModal }) => {
    const [title, setTitle] = useState("");
    // const postData =() =>{
    //     fetch("/api/tasks", {
    //         method: 'POST',
    //         headers:{"content-type":"application.json"},
    //         body:JSON.stringify({
    //             heading: "Find Lances Mustache",
    //             description: "Use apple maps to find lance",
    //             to_do: true,
    //             doing: false,
    //             done: false
    //         })

    // }).then(()=>{

    //     })
    // }
    const printTitle =(e)=>{
        console.log(e.target.value);
    }
    setTitle(e.target.value)

    const handleChange = (e)=>{
        setTitle(e.target.value);
        console.log(title);
    }

    return (
    <div>
    <div className = "container">
    <div className ="modal">
    <div className ="flex-wrapper">
    <h2 className="modal-header">create new tasks</h2> 
    <button className = "btn exit-modal" onClick = {() =>{
        closeModal(false)
    }}>X</button>
    </div>
    <form>
    <label htmlFor ="title">Title</label>
    <input type ="text" id="title" name="title" onChange={handleChange}></input>
    <label htmlFor="description">Description</label>
    <input type ="text" id="description" name="description"></input>
    <label htmlFor="status">Status</label>
    <select id = "task-status-select">
        <option value="">--Please choose a status--</option>
        <option value ="to-do">To-do</option>
        <option value ="doing">Doing</option>
        <option value ="done">Done</option>
    </select>
    <input type="submit" value="submit" className="submit-btn btn" onClick ={()=>{
        
    }}></input>
    </form>
    </div>
    </div>
    </div>
    )
}

export default Modal;

