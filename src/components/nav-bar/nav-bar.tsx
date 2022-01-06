import React, { useState, useContext } from 'react'
import './nav-bar.css'
import { UserContext } from '../../providers/users-provider'

const Navbar: React.FC = () => {
  const [options, toggleOptions] = useState(false)
  const [filterOption, setFilterOption] = useState('name')
  const [filterInput, setFilterInput] = useState('')
  const { filterUsers, defaultUsers, setUsers } = useContext(UserContext)

  const onBurgerButtonPress = () => {
    toggleOptions(!options)
  }

  return (
    <nav className="nav-container">
      <div className="nav-controls">
        <button className="nav-button" onClick={onBurgerButtonPress}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className={options ? 'nav-mobile-options' : 'nav-mobile-options-hidden'}
      >
        <div className="nav-mobile-options-container">
          <label htmlFor="userFilter">Filter users:</label>
          <input
            className="nav-mobile-filter-input"
            id="userFilter"
            type="text"
            placeholder="Filter users"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <label htmlFor="filterOptions">Filter by:</label>
          <select
            defaultValue={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
            className="nav-mobile-filter-input"
          >
            <option value="name">Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="location">Location</option>
          </select>
          <button
            onClick={() => filterUsers(filterOption, filterInput)}
            className="nav-search-button"
          >
            Filter
          </button>
          <button
            onClick={() => setUsers(defaultUsers)}
            className="nav-clear-mobile-button"
          >
            Clear
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
