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
  defaultUsers: User[]
  setDefaultUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => null,
  filterUsers: () => null,
  defaultUsers: [],
  setDefaultUsers: () => null,
})

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])
  const [defaultUsers, setDefaultUsers] = useState<User[]>([])
  const filterUsers = (option: string, input: string) => {
    switch (option) {
      case 'name':
        setUsers(users.filter((user) => user.name.first.includes(input)))
        break
      case 'lastName':
        setUsers(users.filter((user) => user.name.last.includes(input)))
        break
      case 'email':
        setUsers(users.filter((user) => user.email.includes(input)))
        break
      case 'phone':
        setUsers(users.filter((user) => user.phone.includes(input)))
        break
      case 'location':
        setUsers(
          users.filter(
            (user) =>
              user.location.city.includes(input) ||
              user.location.country.includes(input)
          )
        )
        break
    }
  }
  return (
    <UserContext.Provider
      value={{ users, setUsers, filterUsers, defaultUsers, setDefaultUsers }}
    >
      {children}
    </UserContext.Provider>
  )
}
