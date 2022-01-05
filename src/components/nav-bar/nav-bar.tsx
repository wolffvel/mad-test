import React, { useState } from 'react'
import './nav-bar.css'

const Navbar: React.FC = () => {
  const [options, toggleOptions] = useState(true)

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
          />
          <label htmlFor="filterOptions">Filter by:</label>
          <select className="nav-mobile-filter-input">
            <option value="name">Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="location">Location</option>
          </select>
          <button className="nav-search-button">Filter</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
