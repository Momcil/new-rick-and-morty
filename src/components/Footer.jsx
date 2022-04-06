import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <NavContainer>
    <>
      <li className='Home/Dashboard'><a href='#'>Dashboard</a></li>
      <li className='Ranrom Characters'><a href='#'>Ranrom</a></li>
      <li className='Favorites'><a href='#'>Favorites</a></li>
    </>
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