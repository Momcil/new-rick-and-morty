import React from 'react'
// import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ShowMore() {
  const [characters, setCharacters] = useState([])
  const {id} = useParams()
  const url= 'https://rickandmortyapi.com/api/character'
  console.log(id)
  function doFetch(){
      fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }
  useEffect(() => {
    doFetch();
  }, []);

  const currentCharacter = characters.find(character => character.id === parseInt(id))
  console.log(currentCharacter)
  return (
    <div>
      {currentCharacter ? <><img src={currentCharacter.image}></img>
      <p>{currentCharacter.name}</p>
      <p>{currentCharacter.species}</p>
       </>: " "}
    </div>
  )
     }

export default ShowMore