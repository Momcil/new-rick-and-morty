import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function AllCharactersPage() {
  const [characters, setCharacters] = useState([])

  const url= 'https://rickandmortyapi.com/api/character'
  
  function doFetch(){
      fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }
  useEffect(() => {
    doFetch();
  }, []);
  
  return (
    <CardContainer>
       {characters.map(({name, id, image}) => {
         return (
          <>
            <img className="Card-image" key={id} src={image} alt="img" />;
            <p>{name}</p>
            <button className='Card-btn'>
            <Link to={"/showmore/" + id} >Show More</Link>
            </button>
          </>
         )
        })}
    </CardContainer> 
     )}

     export default AllCharactersPage

    const CardContainer = styled.div`
        background-color: rgb(15, 130, 130);
        margin:2rem auto;
        border: 2px solid rgb(0, 255, 60) ;
     `