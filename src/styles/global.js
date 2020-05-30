import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* Importação das fontes do google*/
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

/* Para todos os elementos do html faremos o seguinte */
* {
  margin: 0;  /* Removeremos a margem */
  padding: 0; /* Retiramos o padding */
  outline: 0; /* Retiramos o outline */
  box-sizing: border-box;
}

/* Para todos os elementos que recebem foco */
*:focus {
  outline: 0; /* Isto vale mais para Input ou botão, no chrome fica um azulzinho que não acho legal */
}

html, body, #root {
  height: 100%; /* Ocupa a altura máxima da tela */

  body {
    -webkit-font-smoothing: antialiased; /* Isto faz com que as fontes fiquem bem mais definidas */
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif; /* A sans-serif é uma alteranativa para caso não seja carregada a fonte Roboto */
  }

  /* Para os nossos links */
  a {
    text-decoration: none;
  }

  /* Para todas as listas */
  ul {
    list-style: none;
  }

  /* O cursor do html ficará com o cursor de click */
  button {
    cursor: pointer;
  }
}

`;
