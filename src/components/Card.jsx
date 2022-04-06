import React, {useState, useEffect} from 'react';
import styled from 'styled-components'


function Card() {
    
  return (
    <CardContainer>
     
            <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'/>
            <p>Morty Smith</p>

    </CardContainer> 
     )}

     export default Card

    const CardContainer = styled.div`
        background-color: rgb(15, 130, 130);
        margin:2rem auto;
        border: 2px solid rgb(0, 255, 60) ;
     `