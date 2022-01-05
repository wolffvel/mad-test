import React, { useState, createContext } from 'react'

interface User {
  name: {
    title: string
    first: string
    last: string
  }
  picture: { large: string }
  phone: string
  location: { city: string; state: string; country: string }
  email: string
}

interface UserContextProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => null,
})

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}
