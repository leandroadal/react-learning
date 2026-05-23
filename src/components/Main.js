import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  /* Método antigo
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.inputMudou = this.inputMudou.bind(this);
  }

  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    });
  }
  */

  // Novo método
  state = {
    novaTarefa: '',
    tarefas: [],
    index: null,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
      index: null, // Reseta caso estivesse editando o item excluído
      novaTarefa: '',
    });
  };

  createTask = (tarefa, tarefas) => {
    if (tarefas.includes(tarefa)) return;
    this.setState({
      tarefas: [...tarefas, tarefa],
      novaTarefa: '',
    });
  };

  updateTask = (tarefa, tarefas, index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = tarefa;

    this.setState({
      tarefas: novasTarefas,
      index: null, // Volta ao estado inicial
      novaTarefa: '', // Limpa o campo
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index, novaTarefa } = this.state;
    const tarefaLimpa = novaTarefa.trim();

    if (!tarefaLimpa) return;

    // Se o index é nulo, então não foi enviado tarefa edição.
    if (index === null) {
      this.createTask(tarefaLimpa, tarefas);
    } else {
      this.updateTask(tarefaLimpa, tarefas, index);
    }
  };

  render() {
    const { novaTarefa, tarefas, index } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          ></input>
          <button type="submit">
            {index !== null ? <FaEdit /> : <FaPlus />}
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
