import React from "react"
import styled from "styled-components";

const HeaderContainer = styled.div`
background-color: blue;
text-align: center;
font-size: 30px;
color: white;

`


class Header extends React.Component {
    render(){
        return(
            <HeaderContainer>
              <p>WhatsLab</p>
            </HeaderContainer>
        )
    }
}

export default Header;