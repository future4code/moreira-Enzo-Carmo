import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import requests from '../requisições/requests'
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom";


const ContainerMatches= styled.div`
display:flex;
flex-direction: column;
width: 80%;
height: 70vh;
margin: 100px auto;
`

const CardMatches= styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 80vh;
justify-content: space-between;
align-items: center;
margin: 0 auto;
border: solid black 2px;
border-radius: 15px;
padding: 20px;


`
const MeusMatches= styled.div`
width: 100%;
display:flex;
`

const LogoMatches= styled.div`
text-align: center;
font-size: 30px;
width: 100%;
`
const VoltaHome= styled.div`
float: left;


`

const Cards= styled.div`
display: flex;
flex-direction:row;
align-items: center;
width: 90%;
.imageMatch{
    width: 60px;         
    height: 60px;         
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));         
    border-radius: 50%;         
    transform: matrix(1, 0, 0, 1, 0, 0);        
     object-fit: cover;         
    object-position: 40% top;
}

.Nome{
    margin-left: 40px;
}
`

export default function Matches() {
  const [matches, setMatches] = useState([])
  useEffect (()=>{
    getMatches()
  }, [matches])
  
  const getMatches = () =>{
      requests.get("matches")
      .then((res) =>{
          setMatches(res.data.matches)
          
      })
      .catch ((err) =>{
          console.log(err)
      })
  }

  const deleteMatches = () =>{
      requests.put("clear")
      .then((res) =>{
        setMatches([])
      })
      .catch ((err) =>{
          console.log(err)
      })
  }
    return (
    <ContainerMatches>
        <CardMatches>
         <MeusMatches>
            <VoltaHome>
                <Link to ="/">
                    <AiOutlineArrowLeft style={{fontSize: "40px"}} />
                </Link>
            </VoltaHome>
            <LogoMatches>Meus Matches</LogoMatches>

         </MeusMatches>
         
          {matches.map ((match) =>{
              return (
                <Cards>
                    <img className= "imageMatch" src={match.photo} alt={match.name} />
                    <span className= "Nome">{match.name}</span>
                    
                </Cards>
              )
          })} 
         <button onClick={() => deleteMatches()}>Deletar Matches</button>
        </CardMatches>
        
    </ContainerMatches>
    
  )
}
