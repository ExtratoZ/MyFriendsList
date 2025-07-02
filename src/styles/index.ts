import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        background-color: #222222;
        color: #F2F2F2;
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

export const Pesquisa = styled.input`
  border: none;
  border-bottom: 1px solid #3674b5;
  width: 100%;
  padding: 8px;
  margin-bottom: 40px;
`;

export default GlobalStyle;
