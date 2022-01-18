import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(), // 
      texto: 'Estudar',
      completa: false


    },
    {
      id: Date.now(), // 
      texto: 'Lavar a louça',
      completa: true
    }],
    inputValue: '',
    filtro: ''
  }

  saveLocalStorage = () => {
    localStorage.setItem('id', this.state.id);
    localStorage.setItem('texto', this.state.inputValue);
    localStorage.setItem('completa', this.state.filtro);
  }

  componentDidUpdate() {
    this.saveLocalStorage();
  };

  loadLocalStorage = () => {
    const id = localStorage.getItem("id");
    const texto = localStorage.getItem("texto");
    const completa = localStorage.getItem("completa");

    this.setState({
      id: id || "",
      texto: texto || "",
      completa: completa || ""
    })
  }
  componentDidMount() {
    this.loadLocalStorage()
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const newTask = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const newToDoTask = [...this.state.tarefas, newTask]
    this.setState({
      tarefas: newToDoTask,
      inputValue: ''
    })
  }

  selectTarefa = (id) => {
    const updatedTask = this.state.tarefas.map((task) => {
      if (id === task.id) {
        const newStatus = {
          ...this.state.tarefas, completa: !task.completa
        }
        return newStatus
      } else {
        return task
      }
    });
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
