import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {validarCPF, validarSenha, validarTamanho, validarCEP} from "./models/Cadastro";
import {Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider 
          value={{cpf: validarCPF, senha: validarSenha, nome: validarTamanho, sobrenome: validarTamanho, cep: validarCEP}}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;