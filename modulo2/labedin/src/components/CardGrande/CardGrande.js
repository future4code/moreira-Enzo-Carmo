import React from 'react';
import styled from 'styled-components';

const GrandeCard= styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const GrandeCardImagem= styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardH4= styled.h4 `
    margin-bottom: 15px;
`

const GrandeCardDiv= styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardGrande(props) {
    return (
        <GrandeCard>
            <GrandeCardImagem src={ props.imagem } />
            <GrandeCardDiv>
                <BigCardH4>{ props.nome }</BigCardH4>
                <p>{ props.descricao }</p>
            </GrandeCardDiv>
        </GrandeCard>
    )
}

export default CardGrande;