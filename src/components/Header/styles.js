import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

/* Estilização do header */
export const Content = styled.div`
  height: 64px; /* O conteúdo ocupará a altura total */
  max-width: 900px; /* Largura máxima */
  margin: 0 auto; /* Para centralizar */
  display: flex;
  justify-content: space-between; /* Faz com que a parte da logo fique todo para
                                     a esquerda e o aside todo para a direita */
  align-items: center; /* A logo e o aside ficarão alinhados ao centro */

  /* A estilização do nav corresponde a estilização da parte da esquerda */
  nav {
    display: flex;
    align-items: center; /* Alinha a logo e o título ao centro verticalmente */

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee; /* Cria um tracinho entre a logo e o menu
                                       DASHBOARD */
    }

    /* link (âncora) DASHBOARD */
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  /* Onde fica o perfil do usuário */
  aside {
    display: flex;
    align-items: center;
  }
`;

/* Estilização do perfil */
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee; /* Cria uma bordinha à esquerda, pois à esquerda
                                  ficarão as notificações */

  /* A div que está por volta do nome */
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    /* link do perfil */
    a {
      display: block; /* O nome e o lonk não ficam na mesma linha */
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%; /* Imagem redonda */
  }
`;
