import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e; /* Cor laranja da bolinha */
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute; /* Já vai ficar meio que voando */
  width: 260px; /* 50% do tamanho dela menos 130px */
  left: calc(
    50% - 130px
  ); /* 130px para a esquerda e 130px para a direita do
        ícone da notificação. Ficará ao centro dele */
  top: calc(100% + 30px); /* Alinha ento na parte de cima */
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px; /* 15px em cima e embaixo e 5px nas laterais */

  /* Abaixo a construção do triângulo*/
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px; /* Altura máxima */
  padding: 5px 15px; /* 5px em cima e embaixo e 15px nas laterais */
`;

export const Notification = styled.div`
  color: #fff; /* Cor branca */

  /* Linhas 59 a 63: para separar uma notificação da outra */
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')}; /* Deixa mais clara uma cor em 20% */
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Para notificações não lidas (unread) */
  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block; /* Deixa ao lado do botão */
        width: 8px;
        height: 8px;
        background: #ff892e; /* cor laranja para a bolinha */
        border-radius: 50%;
      }
    `}
`;
