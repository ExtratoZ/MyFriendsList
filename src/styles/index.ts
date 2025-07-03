import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        background-color: ${variaveis.primary};
        color: ${variaveis.text};
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
`;

export const MainContainer = styled.main`
  padding: 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: 1px solid ${variaveis.secondary};
  border-radius: 8px;

  &:hover {
    background-color: ${variaveis.hover};
  }
`;

export const Pesquisa = styled.input`
  border: none;
  border-bottom: 1px solid ${variaveis.secondary};
  width: 100%;
  padding: 8px;
  margin-bottom: 40px;

  &::placeholder {
    font-size: 16px;
    color: ${variaveis.text};
  }

  &:focus {
    border: 1px solid ${variaveis.secondary};
    border-radius: 4px;
    outline: none;
  }
`;

export default GlobalStyle;
