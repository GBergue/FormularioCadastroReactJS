import { useState } from 'react';

function useErros(validacoes) {
  const initialState = criaEstadoInicial(validacoes);
  const [erros, setErros] = useState(initialState);

  const validarCampos = (event) => {
    const {name, value} = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  const possoEnviar = () => {
    for (const campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

function criaEstadoInicial(validacoes) {
  const initialState = {};
  for (const campo in validacoes) {
    initialState[campo] = {valido:true, texto:''};
  }
  return initialState;
}

export default useErros;