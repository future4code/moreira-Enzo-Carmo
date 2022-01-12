import React from 'react';
import styled from 'styled-components';


const CardPequenino= styled.div `
    width: 400px;
    border: 1px solid;
    display:flex;
    align-items: center;
    padding: 50px;
    border-radius: 15px;
    margin: 10px;
  `
  
const CardPequenoContainer= styled.img `
      width: 40px;
  `






function CardPequeno(props) {
    return (
        <CardPequenino>
            <CardPequenoContainer src={props.imagem} />
            <p>{props.descricao}</p>
        </CardPequenino>
    )
}

export default CardPequeno;