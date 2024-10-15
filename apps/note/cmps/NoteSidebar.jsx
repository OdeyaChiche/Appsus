const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteSidebar() {

const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='side-bar-container'>
      <ul  className={`sidebar-container sidebar ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <li className="icon-container">
          <span className='material-icons'>lightbulb</span>
          {isHovered && <span className="tooltip">Notes</span>}
        </li>
        <li className="icon-container">
          <span className='material-icons'>push_pin</span>
          {isHovered && <span className="tooltip">Pinned</span>}
        </li>
        <li className="icon-container">
          <span className='material-icons'>archive</span>
          {isHovered && <span className="tooltip">Archive</span>}
        </li>
        <li className="icon-container">
          <span className='material-icons'>delete</span>
          {isHovered && <span className="tooltip">Deleted</span>}
        </li>
      </ul>
    </div>
  )
}
