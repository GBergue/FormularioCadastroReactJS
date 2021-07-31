
function validarCPF(cpf) {
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarSenha(senha) {
  if(senha.length < 4 || senha.length > 20){
    return {valido:false, texto:"Senha deve ter entre 4 e 20 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarTamanho(texto) {
  if(texto.length < 4 || texto.length > 70){
    return {valido:false, texto:"Deve ter entre 4 e 70 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

function validarCEP(cep) {   
  const validacep = /^[0-9]{8}$/;
  if(validacep.test(cep)) {
   return {valido:true, texto:""};
  }     
  return {valido:false, texto:"CEP deve ter 8 dígitos."};
}

export {validarCPF, validarSenha, validarTamanho, validarCEP};