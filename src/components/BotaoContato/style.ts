import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BotaoNovoContato = styled(Link)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #3674b5;
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;
`;

export default BotaoNovoContato;
