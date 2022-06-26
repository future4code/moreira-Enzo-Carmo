import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle `

body { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color:#EFEFEF;
 
}
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
`
export const SectionLeft = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 55px 0;
    position: absolute;
    height: 80%;
    left: 20px;
    
   

    .logoAlign {
        display: flex;
        flex-direction: row;
        align-items: center;    
        justify-content: flex-start;    
       
    }

    .logoAlign img {
       width: 18%;   
       margin-right: 10px;   
       
    }

    .logoAlign span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
        color: #FFFFFF;
        
    }

    .rodapeStyle  p {
        font-family: 'Montserrat';  
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.135em;
        color: #FFFFFF;
        
    }

    .rodapeStyle  span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }
`

export const SectionRight = styled.div`
    display:flex;
    flex-direction:row;    
    width: 60%;
    

    .listaNumeros{        
        display:flex;
        flex-direction:row;        
        justify-content:space-between;
        align-items:center;
                
    }

    li{         
        display: flex;
        background-color: #ffffff;
        list-style: none;
        border: 0;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        position: relative;
        align-content: flex-end;
        justify-content: center;
        align-items: center;
    }    
`
export const Mensagem = styled.p`
    position:absolute;
    display:flex;
    top:540px;
    left:560px;
`
export const SelectSorteios = styled.select`
  select {
    color: black;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    outline: none;
    width: 200px;
  }
`
