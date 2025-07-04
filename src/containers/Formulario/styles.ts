import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Opcoes = styled.div`
  margin-bottom: 12px;
`;

export const OpcoesItem = styled.div`
  margin: 12px 0;
`;

export const Opcao = styled.input`
  margin-right: 8px;
  cursor: pointer;
  &:checked + label {
    color: ${variaveis.secondary};
  }
`;

export const FormArea = styled.form`
  max-width: 580px;
  width: 100% input {
    margin-bottom: 12px;
  }
  h1 {
    margin-bottom: 12px;
  }
`;
