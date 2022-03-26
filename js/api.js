const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");
const BASE_URL = "https://brasilapi.com.br/api";
//uppercase porque é uma informação de configuração do projeto

inputCep.onkeyup = async (evento) => {
  if (inputCep.value.length < 8) {
    return;
  }
  //fazendo uma requisição api BRASILAPI para buscar as informações com o cep digitado
  const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
    method: "GET",
  });
  //extraindo o json da resposta
  const conteudoResposta = await resposta.json();

  //atribuindo os dados da resposta nos inputs do html
  inputRua.value = conteudoResposta.street;
  inputBairro.value = conteudoResposta.neighborhood;
  inputUF.value = conteudoResposta.state;
  inputComplemento.value = conteudoResposta.city;

  console.log(conteudoResposta);
};
