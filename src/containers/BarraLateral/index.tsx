import Filtros from '../../components/Filtros';
import { Aside } from './style';
import * as enums from '../../utils/enums/ContatoEnum';
import { useDispatch, useSelector } from 'react-redux';
import type { RootReducer } from '../../store';
import { alterarTermo } from '../../store/reducers/ReducerFiltro';
import { Pesquisa } from '../../styles';

const BarraLateral = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtros);

  return (
    <Aside>
      <Pesquisa
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(e) => dispatch(alterarTermo(e.target.value))}
      />
      <Filtros
        valor={enums.Categoria.AMIGOS}
        criterio="categoria"
        label="Amigos"
      />
      <Filtros
        valor={enums.Categoria.FAMILIA}
        criterio="categoria"
        label="Família"
      />
      <Filtros
        valor={enums.Categoria.TRABALHO}
        criterio="categoria"
        label="Trabalho"
      />
      <Filtros criterio="todas" label="Todos" />
    </Aside>
  );
};

export default BarraLateral;
