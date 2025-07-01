import styled from 'styled-components';

interface CategoriasProps {
  ativo?: boolean;
}

export const Categorias = styled.ul<CategoriasProps>`
  padding: 12px;
  border: 1px solid #3674b5;
  border-radius: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
