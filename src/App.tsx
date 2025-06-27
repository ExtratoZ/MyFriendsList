import { Provider } from 'react-redux';
import AreaContatos from './containers/AreaContatos';
import BarraLateral from './containers/BarraLateral';
import GlobalStyle, { Container } from './styles';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <AreaContatos />
      </Container>
    </Provider>
  );
}

export default App;
