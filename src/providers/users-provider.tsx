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
  filterUsers: (option: string, input: string) => void
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => null,
  filterUsers: () => null,
})

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])
  const filterUsers = (option: string, input: string) => {
    switch (option) {
      case 'name':
        setUsers(users.filter((user) => user.name.first.includes(input)))
        break
      case 'lastName':
        setUsers(users.filter((user) => user.name.last.includes(input)))
        break
    }
  }
  return (
    <UserContext.Provider value={{ users, setUsers, filterUsers }}>
      {children}
    </UserContext.Provider>
  )
}
