import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

interface CategoriasProps {
  ativo?: boolean;
}

export const Categorias = styled.ul<CategoriasProps>`
  padding: 12px;
  border: 1px solid ${variaveis.secondary};
  border-radius: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.hover};
  }
`;
