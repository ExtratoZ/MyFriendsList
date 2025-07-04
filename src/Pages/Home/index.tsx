import BotaoContato from '../../components/BotaoContato';
import AreaContatos from '../../containers/AreaContatos';
import BarraLateral from '../../containers/BarraLateral';

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <AreaContatos />
    <BotaoContato />
  </>
);

export default Home;
