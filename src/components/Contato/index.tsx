import { useDispatch } from 'react-redux';
import * as S from './style';
import { Button } from '../../styles';
import Contato from '../../models/Contato';
import { editarContato, remove } from '../../store/reducers/ReducerContato';
import { useState } from 'react';

type Props = Contato;

const Contatos = ({ titulo, email, telefone, categoria, id }: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [contatoEditado, setContadoEditado] = useState<Contato>({
    titulo,
    email,
    telefone,
    categoria,
    id,
  });

  const editando = () => {
    setEstaEditando(true);
  };

  const salvarEdicao = () => {
    dispatch(editarContato({ ...contatoEditado }));
    setEstaEditando(false);
  };

  const trocandoContato = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContadoEditado((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <S.AbaContato>
      {estaEditando ? (
        <>
          <S.InfoContato>
            <S.Input
              name="titulo"
              value={contatoEditado.titulo}
              onChange={trocandoContato}
            />
            <S.Input
              name="email"
              value={contatoEditado.email}
              onChange={trocandoContato}
            />
            <S.Input
              name="telefone"
              value={contatoEditado.telefone}
              onChange={trocandoContato}
            />
            <span>{categoria}</span>
          </S.InfoContato>
          <S.ActionBar>
            <Button onClick={salvarEdicao}>Salvar</Button>
          </S.ActionBar>
        </>
      ) : (
        <>
          <S.InfoContato>
            <span>{titulo}</span>
            <span>{email}</span>
            <span>{telefone}</span>
            <span>{categoria}</span>
          </S.InfoContato>
          <S.ActionBar>
            <Button onClick={() => dispatch(remove(id))}>Excluir</Button>
            <Button onClick={editando}>Editar</Button>
          </S.ActionBar>
        </>
      )}
    </S.AbaContato>
  );
};

export default Contatos;
