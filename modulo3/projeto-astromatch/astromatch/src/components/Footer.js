import React from 'react'
import {AiOutlineClose, AiFillHeart} from "react-icons/ai"
import styled from 'styled-components'

const Botoes= styled.div`
display: flex;
flex-direction: row;
font-size: 50px;
width: 100%;
justify-content: space-evenly;
align-items: center;
padding: 10px;

`
export default function Footer(props) {
  return (
    <Botoes>
        <AiFillHeart onClick={() =>{props.getMatch()}} style={{cursor:"pointer", color:"red", borderRadius:"50%", border:"solid black 1px", padding: "5px" }} />
        <AiOutlineClose onClick= {() =>{props.getData()}}style={{cursor:"pointer" , borderRadius:"50%", border:"solid black 1px", padding: "5px"}} />
    </Botoes>
  )
}
