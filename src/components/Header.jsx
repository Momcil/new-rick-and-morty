import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Titel>
    <h1>Rick and Morty-App</h1>
  </Titel>
  )
}

export default Header


const Titel = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
