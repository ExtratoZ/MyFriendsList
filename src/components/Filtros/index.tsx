import { Categorias } from './style';
import * as enums from '../../utils/enums/ContatoEnum';
import { useDispatch, useSelector } from 'react-redux';
import type { RootReducer } from '../../store';
import { alterarFiltro } from '../../store/reducers/ReducerFiltro';

export type Props = {
  label: string;
  contador?: number;
  criterio: 'categoria' | 'todas';
  valor?: enums.Categoria;
};

const Filtros = ({ label, criterio, valor }: Props) => {
  const dispatch = useDispatch();
  const contatos = useSelector((state: RootReducer) => state.contatos);

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }));
  };

  const contaContatos = () => {
    if (criterio === 'todas') return contatos.itens.length;
    if (criterio === 'categoria') {
      return contatos.itens.filter((item) => item.categoria === valor).length;
    }
  };

  const contador = contaContatos();

  return (
    <Categorias onClick={filtrar}>
      <p>{label}</p>
      <p>{contador}</p>
    </Categorias>
  );
};

export default Filtros;
