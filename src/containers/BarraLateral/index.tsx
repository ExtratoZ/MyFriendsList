import Filtro from '../../components/Filter';
import { Aside } from './style';

const BarraLateral = () => {
  return (
    <Aside>
      <Filtro />
      <ul>
        <li>Família</li>
        <li>Trabalho</li>
        <li>Amigos</li>
        <li>Todos</li>
      </ul>
    </Aside>
  );
};

export default BarraLateral;
