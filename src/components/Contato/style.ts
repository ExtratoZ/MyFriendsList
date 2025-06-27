import styled from 'styled-components';

const AbaContato = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  li {
    padding: 8px;
    border: 1px solid #3674b5;
    border-radius: 12px;
  }
`;

export const Nome = styled.h2``;

export default AbaContato;
