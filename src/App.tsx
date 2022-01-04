import React from 'react'
import './App.css'
import UserCard from './components/user-card'
import Grid from './components/grid'

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid>
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <UserCard
          title="John Doe"
          location="Medellín, Colombia"
          mail="jdoe@mail.com"
          phone="555-555-555"
          imgURL="https://randomuser.me/api/portraits/men/75.jpg"
        />
      </Grid>
    </div>
  )
}

export default App
