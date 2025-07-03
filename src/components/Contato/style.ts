import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const AbaContato = styled.div`
  padding: 12px;
  border: 1px solid ${variaveis.secondary};
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const Nome = styled.h2`
  margin-bottom: 8px;
`;

export const Email = styled.p`
  margin-bottom: 8px;
`;

export const Cel = styled.h4`
  margin-bottom: 8px;
`;

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
