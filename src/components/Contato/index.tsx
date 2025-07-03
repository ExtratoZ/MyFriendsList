import { useDispatch } from 'react-redux';
import * as S from './style';
import { Button } from '../../styles'
import Contato from '../../models/Contato';
import { remove } from '../../store/reducers/ReducerContato';

type Props = Contato;

const Contatos = ({ titulo, email, telefone, categoria, id }: Props) => {
  const dispatch = useDispatch();

  return (
    <S.AbaContato>
      <div>
        <S.Nome>{titulo}</S.Nome>
        <S.Email>{email}</S.Email>
        <S.Cel>{telefone}</S.Cel>
        <span>{categoria}</span>
      </div>
      <S.ActionBar>
        <Button onClick={() => dispatch(remove(id))}>Excluir</Button>
        <Button>Editar</Button>
      </S.ActionBar>
    </S.AbaContato>
  );
};

export default Contatos;
