import React from 'react';
import './App.css';

import Img from './logo.svg';

import { Abas } from './abas.jsx';
import { Nav } from './nav.jsx';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.setaAtivo = this.setaAtivo.bind(this);


    this.state = {
      contagem: 0,
      ativo: 1
    }

    setInterval(() => { this.incrementa() }, 1000);
  }

  incrementa() {
    const contagem = this.state.contagem + 1;
    this.setState({ contagem });
  }

  setaAtivo(ativo) {
    this.setState({ ativo });
  }

  render() {

    const contagem = this.state.contagem;
    const ativo = this.state.ativo;

    return (
      <div className="App">

        {/* <a href={Img} download><img src={Img} /></a> */}

        <Abas ativo={ativo} contagem={contagem} />
        <Nav setAtivo={this.setaAtivo} />

      </div>
    );
  }
}

export default App;
