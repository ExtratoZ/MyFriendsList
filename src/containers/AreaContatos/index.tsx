import { useSelector } from 'react-redux';
import Contatos from '../../components/Contato';
import type { RootReducer } from '../../store';
import { MainContainer } from '../../styles';
import ListaContatos from './styles';

const AreaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  const contatosFiltrados = () => {
    let filtroContatos = itens;
    return filtroContatos;
  };

  const qtdTask = contatosFiltrados();

  return (
    <MainContainer>
      <ListaContatos>
        {qtdTask.map((t) => (
          <li key={t.titulo}>
            <Contatos
              id={t.id}
              titulo={t.titulo}
              email={t.email}
              telefone={t.telefone}
              categoria={t.categoria}
            />
          </li>
        ))}
      </ListaContatos>
    </MainContainer>
  );
};

export default AreaContatos;
