import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px; /* Largura máxima */
  margin: 50px auto; /* Centraliza e dá uma distância da parte de cima */
  display: flex;
  flex-direction: column;

  /* As configurações do header fará a centralização do conteúdo */
  header {
    display: flex;
    align-self: center;
    align-items: center;

    /* Dentro do header teremos os botões */
    button {
      border: 0; /* Retiramos a borda */
      background: none; /* Retiramos o background */
    }

    /* Estilização do título */
    strong {
      color: #fff; /* Cor branca */
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Cria duas colunas com o mesmo tamanho */
    grid-gap: 15px; /* Cada célula terá 15px de distância uma da outra */
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  /* Um agendamento que já passou, colocaremos 60% de opacidade senão 100% */
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  /* Horário do agendamento */
  strong {
    display: block;
    /* Cor definida com base nas props (atribuímos available para a porps
       no componente Time) */
    color: ${(props) => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  /* Quem marcou o agendamento */
  span {
    display: block;
    margin-top: 3px;
    /* Cor definida com base nas props (atribuímos available para a porps
       no componente Time) */
    color: ${(props) => (props.available ? '#999' : '#666')};
  }
`;
