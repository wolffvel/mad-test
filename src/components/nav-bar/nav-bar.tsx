import React, { useState, useContext } from 'react'
import './nav-bar.css'
import { UserContext } from '../../providers/users-provider'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'

const Navbar: React.FC = () => {
  const [options, toggleOptions] = useState(false)
  const [filterOption, setFilterOption] = useState('name')
  const [filterInput, setFilterInput] = useState('')
  const [sortOption, setSortOption] = useState('name')
  const [ascending, toggleAscending] = useState(true)
  const { users, filterUsers, setFilteredUsers, sortUsers } =
    useContext(UserContext)

  const onBurgerButtonPress = () => {
    toggleOptions(!options)
  }

  const onFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value)
    if (e.target.value.length > 0) {
      filterUsers(filterOption, e.target.value)
    } else {
      setFilteredUsers(users)
    }
  }

  const onFilterOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value)
    if (filterInput.length > 0) {
      filterUsers(e.target.value, filterInput)
    }
  }

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
    sortUsers(e.target.value, ascending)
  }

  const onAscendingToggle = () => {
    sortUsers(sortOption, !ascending)
    toggleAscending(!ascending)
  }

  return (
    <nav className="nav-container">
      <div className="nav-controls">
        <div className="nav-desktop-options">
          <div>
            <label htmlFor="userFilter">Filter users:</label>
            <input
              className="nav-filter-input"
              id="userFilter"
              type="text"
              placeholder="Filter users"
              value={filterInput}
              onChange={onFilterInputChange}
            />
          </div>
          <div>
            <label htmlFor="filterOptions">Filter by:</label>
            <select
              defaultValue={filterOption}
              onChange={onFilterOptionChange}
              className="nav-filter-input"
            >
              <option value="name">Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="location">Location</option>
            </select>
          </div>
          <div className="nav-sort-container">
            <label htmlFor="filterOptions">Sort by:</label>
            <select
              defaultValue={sortOption}
              onChange={onSortChange}
              className="nav-filter-input"
            >
              <option value="name">Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="location">Location</option>
            </select>
            {ascending && (
              <AiOutlineSortAscending
                className="nav-sort-button"
                onClick={onAscendingToggle}
                size="24px"
              />
            )}
            {!ascending && (
              <AiOutlineSortDescending
                className="nav-sort-button"
                onClick={onAscendingToggle}
                size="24px"
              />
            )}
          </div>
        </div>
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
            className="nav-filter-input"
            id="userFilter"
            type="text"
            placeholder="Filter users"
            value={filterInput}
            onChange={onFilterInputChange}
          />
          <label htmlFor="filterOptions">Filter by:</label>
          <select
            defaultValue={filterOption}
            onChange={onFilterOptionChange}
            className="nav-filter-input"
          >
            <option value="name">Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="location">Location</option>
          </select>
          <label htmlFor="filterOptions">Sort by:</label>
          <div className="nav-sort-container">
            <select
              defaultValue={sortOption}
              onChange={onSortChange}
              className="nav-filter-input nav-sort-input"
            >
              <option value="name">Name</option>
              <option value="lastName">Last Name</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="location">Location</option>
            </select>
            {ascending && (
              <AiOutlineSortAscending
                className="nav-sort-button"
                onClick={onAscendingToggle}
                size="24px"
              />
            )}
            {!ascending && (
              <AiOutlineSortDescending
                className="nav-sort-button"
                onClick={onAscendingToggle}
                size="24px"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
