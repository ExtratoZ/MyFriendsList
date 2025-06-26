import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
`;

export default GlobalStyle;
