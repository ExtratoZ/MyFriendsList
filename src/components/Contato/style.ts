import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const AbaContato = styled.div`
  padding: 12px;
  border: 1px solid ${variaveis.secondary};
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const InfoContato = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 6px;
  border: 1px solid ${variaveis.secondary};
  border-radius: 6px;
  font-size: 14px;
  width: 90%;
`;

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
