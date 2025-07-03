import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variaveis from '../../styles/variaveis';

const BotaoNovoContato = styled(Link)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${variaveis.primary};
  border: 1px solid ${variaveis.secondary};
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;

  &:hover {
    background-color: ${variaveis.hover};
  }
`;

export default BotaoNovoContato;
