import React, { Component } from 'react';
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
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text"></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
