import './App.css';
import React from 'react'
import Modal from './Modal'
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";

const Tasks = () => {
return (
    <div className ="container">
    <div className ="cards">
    <Todo />
    <Doing />
    <Done />
    </div>
    </div>
)
}





export default Tasks