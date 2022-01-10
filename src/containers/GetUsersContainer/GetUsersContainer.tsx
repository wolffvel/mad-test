import React, { useEffect, useContext } from 'react'
import Spinner from '../../components/spinner'
import UserCard from '../../components/user-card'
import Grid from '../../components/grid'
import { UserContext, User } from '../../providers/users-provider'
import useFetch from '../../hooks/use-fetch'

interface UsersResponse {
  results: User[]
}

const GetUsersContainer: React.FC = () => {
  const { response, isLoading, error } = useFetch<UsersResponse>(
    'https://randomuser.me/api/',
    { results: 50 }
  )
  const { setUsers, filteredUsers, setFilteredUsers } = useContext(UserContext)

  useEffect(() => {
    setUsers(response?.results as User[])
    setFilteredUsers(response?.results as User[])
  }, [response])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Grid>
      {filteredUsers.map((user) => {
        return (
          <UserCard
            key={user.email}
            title={`${user.name.first} ${user.name.last}`}
            imgURL={user.picture.large}
            mail={user.email}
            location={`${user.location.city}, ${user.location.country}`}
            phone={user.phone}
          />
        )
      })}
      {filteredUsers.length === 0 && <p>No Results</p>}
      {error && (
        <p>There was an error with your request, please try again later</p>
      )}
    </Grid>
  )
}
export default GetUsersContainer
