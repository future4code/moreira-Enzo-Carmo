import React from "react";
import styled from "styled-components";
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import { Link } from "react-router-dom";

const HeaderApp= styled.div`
width: 100%;
padding: 10px;
display: flex;
`

const Logo= styled.div`
text-align: center;
font-size: 30px;
width: 100%;
`

const IconeMatches= styled.div`
float: right;
padding-right: 20px;

`

export default function Header() {
  return (
    <HeaderApp>
      <Logo>Astromatch</Logo>
      <IconeMatches>
        <Link to= "/matches">
          <AiOutlineUsergroupAdd style={{fontSize: "40px"}} />
        </Link>
        
      </IconeMatches>
      
    </HeaderApp>
  )
}
