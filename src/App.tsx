import AreaContatos from './containers/AreaContatos';
import BarraLateral from './containers/BarraLateral';
import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <AreaContatos />
      </Container>
    </>
  );
}

export default App;
