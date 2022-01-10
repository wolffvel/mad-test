import React, { useState, createContext } from 'react'

export interface User {
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
  filteredUsers: User[]
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>
  sortUsers: (option: string, ascending: boolean) => void
}

export const UserContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => null,
  filterUsers: () => null,
  filteredUsers: [],
  setFilteredUsers: () => null,
  sortUsers: () => null,
})

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const filterUsers = (option: string, input: string) => {
    switch (option) {
      case 'name':
        setFilteredUsers(
          users.filter((user) => user.name.first.toLowerCase().includes(input))
        )
        break
      case 'lastName':
        setFilteredUsers(
          users.filter((user) => user.name.last.toLowerCase().includes(input))
        )
        break
      case 'email':
        setFilteredUsers(
          users.filter((user) => user.email.toLowerCase().includes(input))
        )
        break
      case 'phone':
        setFilteredUsers(users.filter((user) => user.phone.includes(input)))
        break
      case 'location':
        setFilteredUsers(
          users.filter(
            (user) =>
              user.location.city.toLowerCase().includes(input) ||
              user.location.country.toLowerCase().includes(input)
          )
        )
        break
    }
  }

  const sortUsers = (option: string, ascending: boolean) => {
    switch (option) {
      case 'name':
        setFilteredUsers([
          ...filteredUsers.sort((a, b) => {
            const nameA = a.name.first.toLowerCase()
            const nameB = b.name.first.toLowerCase()
            if (!ascending) {
              if (nameA < nameB) return 1
              if (nameA > nameB) return -1
              return 0
            } else {
              if (nameA > nameB) return 1
              if (nameA < nameB) return -1
              return 0
            }
          }),
        ])
        break
      case 'lastName':
        setFilteredUsers([
          ...filteredUsers.sort((a, b) => {
            const nameA = a.name.last.toLowerCase()
            const nameB = b.name.last.toLowerCase()
            if (!ascending) {
              if (nameA < nameB) return 1
              if (nameA > nameB) return -1
              return 0
            } else {
              if (nameA > nameB) return 1
              if (nameA < nameB) return -1
              return 0
            }
          }),
        ])
        break
      case 'email':
        setFilteredUsers([
          ...filteredUsers.sort((a, b) => {
            const emailA = a.email.toLowerCase()
            const emailB = b.email.toLowerCase()
            if (!ascending) {
              if (emailA < emailB) return 1
              if (emailA > emailB) return -1
              return 0
            } else {
              if (emailA > emailB) return 1
              if (emailA < emailB) return -1
              return 0
            }
          }),
        ])
        break
      case 'phone':
        setFilteredUsers([
          ...filteredUsers.sort((a, b) => {
            const emailA = a.email.toLowerCase()
            const emailB = b.email.toLowerCase()
            if (!ascending) {
              if (emailA < emailB) return 1
              if (emailA > emailB) return -1
              return 0
            } else {
              if (emailA > emailB) return 1
              if (emailA < emailB) return -1
              return 0
            }
          }),
        ])
        break
      case 'location':
        setFilteredUsers([
          ...filteredUsers.sort((a, b) => {
            const locationA = a.location.city.toLowerCase()
            const locationB = b.location.city.toLowerCase()
            if (!ascending) {
              if (locationA < locationB) return 1
              if (locationA > locationB) return -1
              return 0
            } else {
              if (locationA > locationB) return 1
              if (locationA < locationB) return -1
              return 0
            }
          }),
        ])
        break
    }
  }
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        filterUsers,
        filteredUsers,
        setFilteredUsers,
        sortUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
