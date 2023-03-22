import React, { useContext } from 'react'
import RobotContext from '../context/RobotContext'

function SearchInput() {
  const {onSearchChange} = useContext(RobotContext)
  return (
    <div>
      <input className='pa2 bg-lightest-blue b--light-blue br2'
      type="text" 
      placeholder='search for a robot'
      onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchInput
