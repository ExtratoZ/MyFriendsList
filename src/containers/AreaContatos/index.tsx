import { useSelector } from 'react-redux';
import Contatos from '../../components/Contato';
import type { RootReducer } from '../../store';
import { MainContainer } from '../../styles';
import ListaContatos from './styles';

const AreaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtros
  );

  const filtraContatos = () => {
    let contatosFiltrados = itens;

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      );
    }
    if (criterio === 'categoria') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.categoria === valor
      );
    }
    return contatosFiltrados;
  };

  const qtdTask = filtraContatos();
  console.log(filtraContatos());

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
