import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../../components/spinner'
import UserCard from '../../components/user-card'
import Grid from '../../components/grid'

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

const GetUsersContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [status, setSatus] = useState('loading')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get('https://randomuser.me/api/', {
          params: {
            results: 30,
          },
        })
        setUsers(result.data.results)
        setSatus('ok')
      } catch (err) {
        console.log(err)
      }
    }
    fetchUsers()
  }, [])

  if (status === 'loading') {
    return <Spinner />
  }

  return (
    <Grid>
      {users.map((user, index) => {
        return (
          <UserCard
            key={index}
            title={`${user.name.first} ${user.name.last}`}
            imgURL={user.picture.large}
            mail={user.email}
            location={`${user.location.city}, ${user.location.country}`}
            phone={user.phone}
          />
        )
      })}
    </Grid>
  )
}
export default GetUsersContainer
