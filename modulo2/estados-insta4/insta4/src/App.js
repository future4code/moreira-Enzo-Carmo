import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledInputs = styled.input`
 border-radius: 10px; 
 margin-bottom: 40px;
 padding: 20px;
 display: flex;

`

class App extends React.Component {
  state = {
    postList: [{
      nomeUsuario: "paulinha",
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
    },

    {
      nomeUsuario: 'João',
      fotoUsuario: 'https://cdn.discordapp.com/attachments/467841293494517760/930920943998623805/19500111-portrait-of-happy-adult-man-smiling-isolated-on-white-background.png',
      fotoPost: 'https://cdn.discordapp.com/attachments/467841293494517760/930919988217380974/dsetiny-the-traveler.png',
    },

    {
      nomeUsuario: 'Maria',
      fotoUsuario: 'https://cdn.discordapp.com/attachments/467841293494517760/930921106372718652/happy-adult-woman-couch-looking-camera-close-up-pretty-blond-sitting-gray-facial-expression-54888900.png',
      fotoPost: 'https://cdn.discordapp.com/attachments/467841293494517760/930921215114235904/husky_siberian-p.png',
    }],

    valorInputUser: "",
    valorInputUserPhoto: "",
    valorInputPostPhoto: ""


  };


  addPost = () => {
    const newPost = {
      nomeUsuario: this.state.valorInputUser,
      fotoUsuario: this.state.valorInputUserPhoto,
      fotoPost: this.state.valorInputPostPhoto

    }

    const newPosts = [...this.state.postList, newPost];
    this.setState({ postList: newPosts });
  };

  onChangeInputUser = (event) => {
    this.setState({ valorInputUser: event.target.value });
  };

  onChangeInputUserPhoto = (event) => {
    this.setState({ valorInputUserPhoto: event.target.value });
  };

  onChangeInputPostPhoto = (event) => {
    this.setState({ valorInputPostPhoto: event.target.value });
  };




  render() {
    const listPost = this.state.postList.map((post, index) => {
      return <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })


    return (
      <MainContainer>
        {listPost}

        <div>
          <StyledInputs

            value={this.state.valorInputUser}

            onChange={this.onChangeInputUser}
            placeholder={"Usuário"}
          />
          <StyledInputs

            value={this.state.valorInputUserPhoto}

            onChange={this.onChangeInputUserPhoto}
            placeholder={"Foto de Perfil"}
          />
          <StyledInputs

            value={this.state.valorInputPostPhoto}

            onChange={this.onChangeInputPostPhoto}
            placeholder={"Conteúdo do Post"}
          />
          <button onClick={this.addPost}>Adicionar Post</button>
        </div>
      </MainContainer>

    );






  }
}



export default App;
