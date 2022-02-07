import React from "react"
import styled from "styled-components";


const MainContentContainer = styled.div`
height: 100%;

`
const AppMessageContainer = styled.div`
background-color: yellow;
display: flex;

`

const MessageContainerList = styled.div`
    display: flex;
    height: 100%;
    align-content: flex-end;
    flex-direction: column;
    justify-content: flex-end;

`


class MainContent extends React.Component {
    state = {
        mensagens: [],
        valorInputUser: "",
        valorInputMessage: "",
    };

    sendMessage = () => {
        const newMessage = {
            name: this.state.valorInputUser,
            message: this.state.valorInputMessage,
        };

        const receivedMessages = [...this.state.mensagens, newMessage];
        this.setState({ mensagens: receivedMessages, valorInputMessage: "", valorInputUser: "" });
    };

    onChangeInputUser = (event) => {
        this.setState({ valorInputUser: event.target.value });

    };

    onChangeInputMessage = (event) => {
        this.setState({ valorInputMessage: event.target.value });

    };
    render() {
        const messageList = this.state.mensagens.map((msg) => {
            return (
                <p>
                    {msg.name}: {msg.message}
                </p>
            )
        });
        return (
            <MainContentContainer>
                <MessageContainerList>
                    {messageList}
                </MessageContainerList>
                <AppMessageContainer>
                    <input style={{ width: 50 }} type='text' placeholder='Usuário' value={this.state.valorInputUser} onChange={this.onChangeInputUser} />
                    <input style={{ width: '100%' }} type='text' placeholder='Mensagem' value={this.state.valorInputMessage} onChange={this.onChangeInputMessage} />
                    <button onClick={this.sendMessage}>Send</button>
                </AppMessageContainer>
            </MainContentContainer>
        )
    }
}

export default MainContent;