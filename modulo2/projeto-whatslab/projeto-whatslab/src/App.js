import React from 'react'
import AppMessage from'./components/AppMessage'
import Header from './components/Header'
import MainContent from './components/MainContent';
import styled from 'styled-components'

const AppContainer = styled.div`
border: solid 2px;
height: 80vh;
border-radius: 14px;
margin: 0 auto;
padding: 20px;
width: 30%;
display: flex;
justify-content: space-between;
flex-direction: column;

`

const AppMessageContainer = styled.input`

`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent />
      <AppMessage />

    </AppContainer>
  );
}

export default App;
