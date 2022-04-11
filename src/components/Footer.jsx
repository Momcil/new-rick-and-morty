import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <NavContainer>
      <li className='home'>
        <Link to='/'>Home</Link>
      </li>
      <li className='random-characters'>
        <Link to='/random'>Random Characters</Link>
      </li>
      <li className='favorites'>
        <Link to='/favorites'>Favorites</Link>
      </li>
    </NavContainer>
  )
}

const NavContainer = styled.ul`
display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  background-color: #282c34;
  width: auto;
`
export default Footer