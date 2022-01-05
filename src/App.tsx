import React from 'react'
import './App.css'
import Navbar from './components/nav-bar'
import GetUsersContainer from './containers/GetUsersContainer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <GetUsersContainer />
    </div>
  )
}

export default App
