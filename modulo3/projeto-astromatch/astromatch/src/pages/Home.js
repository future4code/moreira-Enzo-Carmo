import React, {useState, useEffect} from "react";
import styled from "styled-components";
import requests from "../requisições/requests"
import Header from "../components/Header";
import Footer from "../components/Footer";


const ContainerProfile= styled.div`
display:flex;
flex-direction: column;
width: 80%;
height: 70vh;
margin: 100px auto;
`

const Card= styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 80vh;
justify-content: space-between;
align-items: center;
margin: 0 auto;
border: solid black 2px;
border-radius: 15px;

`

const ImagemCard= styled.div`
position:relative;


.image{
  max-width: 400px;
  max-height: 400px;
}
.image {
   position: relative;
   display: inline-block;
}

.image:after {
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 20px;
   background: linear-gradient(180deg, rgba(0,0,0,0), black);
}
`

const Descricao= styled.div`
position: absolute;
bottom: 0;
color:whitesmoke;
padding: 10px;



`

export default function Home() {
  const [data, setData]= useState([])
  const [choose, setChoose]= useState (false)
  useEffect(() => {
    getData()
  }, [])
  
  const getData = () => {
    requests.get("person")
    .then((res) => {
      setData(res.data.profile)
      console.log(res.data.profile)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  const getMatch = () => {
    const body={id: data.id, choice:true}
    requests.post("choose-person", body)
    .then((res) =>{
      setChoose(res.data)
      getData()
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  
  return (
    <ContainerProfile>
      
        
        <Card>
        <Header />
         <ImagemCard>
           <img className="image" src={data.photo} />
           <Descricao>
           <span>
             {data.name} {","}
             
           </span>
           <span>
            {data.age}
           </span>
           <div>
             {data.bio}
           </div>
         </Descricao>
         </ImagemCard>
         
         <Footer getMatch={getMatch} getData={getData} />
        </Card> 
        
        
      
    </ContainerProfile>
  )
}
