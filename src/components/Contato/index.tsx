import * as S from './style';
import Contato from '../../models/Contato';

type Props = Contato;

const Contatos = ({ titulo, email, telefone, categoria, id }: Props) => {
  return (
    <S.AbaContato>
      <S.Nome>{titulo}</S.Nome>
      <S.Email>{email}</S.Email>
      <S.Cel>{telefone}</S.Cel>
      <span>{categoria}</span>
    </S.AbaContato>
  );
};

export default Contatos;
