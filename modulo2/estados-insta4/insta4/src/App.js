import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'João'}
          fotoUsuario={'https://cdn.discordapp.com/attachments/467841293494517760/930920943998623805/19500111-portrait-of-happy-adult-man-smiling-isolated-on-white-background.png'}
          fotoPost={'https://cdn.discordapp.com/attachments/467841293494517760/930919988217380974/dsetiny-the-traveler.png'}
        />

        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://cdn.discordapp.com/attachments/467841293494517760/930921106372718652/happy-adult-woman-couch-looking-camera-close-up-pretty-blond-sitting-gray-facial-expression-54888900.png'}
          fotoPost={'https://cdn.discordapp.com/attachments/467841293494517760/930921215114235904/husky_siberian-p.png'}
        />
      </MainContainer>
         
    );

    
  }
}



export default App;
