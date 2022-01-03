import React from 'react'
import './App.css'
import UserCard from './components/user-card'

function App() {
  return (
    <div className="App">
      <UserCard
        title="John Doe"
        location="Medellín, Colombia"
        mail="jdoe@mail.com"
        phone="555-555-555"
        imgURL="https://randomuser.me/api/portraits/men/75.jpg"
      />
    </div>
  )
}

export default App
