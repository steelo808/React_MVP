import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header';
import Tasks  from './Tasks';
import Modal from  './Modal';

function App() {

  useEffect(() => {
        fetch("http://localhost:4000/api/phone_contacts", {
          mode: "cors"
        })
        .then((res) => res.json())
        .then(data => {
          setContacts(data);
        });
      }, [])

  return (
    <div className="App">
    <Header />
    <Tasks />
    </div>
  )
}

export default App
