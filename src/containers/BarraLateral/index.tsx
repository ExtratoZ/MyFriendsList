import Filtros from '../../components/Filtros';
import Pesquisa from '../../components/Pesquisa';
import { Aside } from './style';

const BarraLateral = () => {
  return (
    <Aside>
      <Pesquisa />
      <Filtros />
    </Aside>
  );
};

export default BarraLateral;
