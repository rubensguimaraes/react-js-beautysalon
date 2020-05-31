import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%; /* Altura de 100% */
  background: linear-gradient(
    -90deg,
    #7159c1,
    #ab59c1
  ); /* Roxo convertido para rosa*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%; /* Ocupará a largura máxima possível */
  max-width: 315px; /* No entanto, a largura será 135px */
  text-align: center; /* A logo será centralizada */

  form {
    display: flex; /* Esta opção e a opção flex-direction: column, fará com que */
    flex-direction: column; /* cada input, botão e outras coisas, fiquem um abaixo do outro */
    margin-top: 30px; /* Para distanciar um pouco da logo */

    input {
      background: rgba(0, 0, 0, 0.1); /* Será um preto com 10% de opacidade */
      border: 0;
      border-radius: 4px;
      height: 44px; /* A altura será fixa de 44px */
      padding: 0 15px; /* Lateral na horizontal de 15px */
      color: #fff;
      margin: 0 0 10px; /* Haverá uma margem abaixo de cada input */

      &::placeholder {
        color: rgba(255, 255, 255, 0.7); /* Branco com 70% de opacidade */
      }
    }
    button {
      margin: 5px 0 0;
      height: 44px; /* Tamanho do botão */
      background: #3b9eff; /* Cor azul */
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s; /* Permite um efeito de transição ao passar o mouse no botão */

      &:hover {
        background: ${darken(
          0.03,
          '#3b9eff'
        )}; /* Efeito ao passar o mouse por cima do botão, vai escurecer 3% */
      }
    }

    a {
      /* Estilização do Link "Criar conta gratuíta" */
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
