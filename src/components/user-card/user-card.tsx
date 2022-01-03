import React from 'react'
import './user-card.css'

interface UserCardProps {
  title: string
  imgURL: string
  mail: string
  phone: string
  location: string
}

const UserCard: React.FC<UserCardProps> = ({
  title,
  imgURL,
  mail,
  phone,
  location,
}) => {
  return (
    <article className="user-card-container">
      <header className="user-card-header">
        <h1 className="user-card-title">{title}</h1>
        <div className="user-card-picture">
          <img src={imgURL} alt="User profile picture" />
        </div>
      </header>
      <div className="user-card-body">
        <div className="user-card-body-spacer" />
        <div className="user-card-body-content">
          <p>{mail}</p>
          <p>{phone}</p>
          <p>{location}</p>
        </div>
      </div>
    </article>
  )
}

export default UserCard
