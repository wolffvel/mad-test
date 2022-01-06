import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Spinner from '../../components/spinner'
import UserCard from '../../components/user-card'
import Grid from '../../components/grid'
import { UserContext } from '../../providers/users-provider'

const GetUsersContainer: React.FC = () => {
  const { users, setUsers, setDefaultUsers } = useContext(UserContext)
  const [status, setSatus] = useState('loading')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get('https://randomuser.me/api/', {
          params: {
            results: 50,
          },
        })
        setUsers(result.data.results)
        setDefaultUsers(result.data.results)
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
      {users.length === 0 && <p>No Results</p>}
    </Grid>
  )
}
export default GetUsersContainer
