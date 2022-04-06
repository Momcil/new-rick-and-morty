import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


function Card() {
  const [characters, setCharacters] = useState([])

  const url= 'https://rickandmortyapi.com/api/character'
  
  function doFetch(){
      fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }
  console.log(characters)
  useEffect(() => {
    doFetch();
  }, []);
  
  return (
    <CardContainer>
       {characters.map(({name, id, image}) => {
         return (
         <>
         <img src={image} alt="img" />;
         <p>{name}</p>
         <button>show more</button>
         </>
         )
        })}
    </CardContainer> 
     )}

     export default Card

    const CardContainer = styled.div`
        background-color: rgb(15, 130, 130);
        margin:2rem auto;
        border: 2px solid rgb(0, 255, 60) ;
     `