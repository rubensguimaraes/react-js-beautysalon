import styled from 'styled-components';

export const Container = styled.div`
  align-self: center; /* Para o preview da imagem ficar centralizada no Form */
  margin-bottom: 30px;

  label {
    cursor: pointer; /* Caso o usuário clique ele saberá que poderá selecionar
                        uma nova imagem */
    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee; /* Enquanto não for carregada */
    }
    input {
      display: none;
    }
  }
`;
