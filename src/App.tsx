import React from 'react'
import './App.css'
import Navbar from './components/nav-bar'
import GetUsersContainer from './containers/GetUsersContainer'
import { UsersContextProvider } from './providers/users-provider'

const App: React.FC = () => {
  return (
    <UsersContextProvider>
      <div className="App">
        <Navbar />
        <GetUsersContainer />
      </div>
    </UsersContextProvider>
  )
}

export default App
