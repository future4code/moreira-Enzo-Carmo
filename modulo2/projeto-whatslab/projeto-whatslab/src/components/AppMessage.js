import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const AppMessageContainer = styled.div`
background-color: yellow;
display: flex;

`


class AppMessage extends React.Component {
    state = {
    mensagens: [],
    valorInputUser:"",
    valorInputMessage:"",    
    };

    sendMessage = () =>{
        const newMessage = {
            name: this.state.valorInputUser,
            message: this.state.valorInputMessage,
        }

        const receivedMessages = [...this.state.message, newMessage];
        this.setState({message: receivedMessages, valorInputMessage: "", valorInputUser: ""});
    };

    onChangeInputUser = (event) => {
        this.setState ({valorInputUser: event.target.value});

    };

    onChangeInputMessage = (event) => {
        this.setState({valorInputMessage: event.target.value});

    };

   
    
    
    
    render() {
        const messageList = this.state.mensagens.map((msg) => {
            return(
                <p>
                    {msg.name}: {msg.message}
                </p>
            )
        });
        
        return (
            <AppMessageContainer>
                <input style={{width: 50}} type='text' placeholder='Usuário' value={this.state.valorInputUser} onChange={this.onChangeInputUser} />
                <input style= {{width: '100%'}} type='text' placeholder='Mensagem' value={this.state.valorInputMessage} onChange={this.onChangeInputMessage} />
                <button onClick={this.sendMessage}>Send</button>
            </AppMessageContainer>

            
        )
    }
}

export default AppMessage;