import * as S from './style';
import Contato from '../../models/Contato';
import { remove } from '../../store/reducers/ReducerContato';
import { useDispatch } from 'react-redux';

type Props = Contato;

const Contatos = ({ titulo, email, telefone, categoria, id }: Props) => {
  const dispatch = useDispatch();

  return (
    <S.AbaContato>
      <S.Nome>{titulo}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Cel>{telefone}</S.Cel>
      <span>{categoria}</span>
      <button onClick={() => dispatch(remove(id))}>Remover</button>
      <button>Editar</button>
    </S.AbaContato>
  );
};

export default Contatos;
