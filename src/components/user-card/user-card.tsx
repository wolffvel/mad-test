import React, { useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
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
  const [cardFields, setCardFields] = useState({
    title,
    imgURL,
    mail,
    phone,
    location,
  })
  const [editFields, toggleEditFields] = useState(false)

  return (
    <article className="user-card-container">
      <header className="user-card-header">
        <div className="user-card-edit-container">
          {!editFields && (
            <FaUserEdit
              onClick={() => toggleEditFields(true)}
              className="user-card-edit"
              size="24px"
            />
          )}
          {editFields && (
            <button
              onClick={() => toggleEditFields(false)}
              className="user-card-edit-done"
            >
              Done
            </button>
          )}
        </div>
        {!editFields && <h1 className="user-card-title">{cardFields.title}</h1>}
        {editFields && (
          <input
            onChange={(e) =>
              setCardFields({ ...cardFields, title: e.target.value })
            }
            value={cardFields.title}
            placeholder="Name"
            type="text"
          />
        )}
        <div className="user-card-picture">
          <img src={cardFields.imgURL} alt="User profile picture" />
        </div>
      </header>
      <div className="user-card-body">
        <div className="user-card-body-spacer" />
        <div className="user-card-body-content">
          {!editFields && <p>{cardFields.mail}</p>}
          {editFields && (
            <input
              onChange={(e) =>
                setCardFields({ ...cardFields, mail: e.target.value })
              }
              value={cardFields.mail}
              placeholder="Mail"
              type="text"
            />
          )}
          {!editFields && <p>{cardFields.phone}</p>}
          {editFields && (
            <input
              onChange={(e) =>
                setCardFields({ ...cardFields, phone: e.target.value })
              }
              value={cardFields.phone}
              placeholder="Phone"
              type="text"
            />
          )}
          {!editFields && <p>{cardFields.location}</p>}
          {editFields && (
            <input
              onChange={(e) =>
                setCardFields({ ...cardFields, location: e.target.value })
              }
              value={cardFields.location}
              placeholder="Location"
              type="text"
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default UserCard
