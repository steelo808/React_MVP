import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header';
import Tasks  from './Tasks';

function App() {

  // useEffect(() => {
  //       fetch("http://localhost:4000/api/tasks", {
  //         mode: "cors"
  //       })
  //       .then((res) => res.json())
  //       .then(data => {
  //         tasks(data);
  //       });
  //     }, [])

  return (
    <div className="App">
    <Header />
    <Tasks />
    </div>
  )
}

export default App
