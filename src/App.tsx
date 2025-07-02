import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle, { Container } from './styles';
import store from './store';
import Home from './Pages/Home';
import NovoContato from './Pages/NovoContato';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new-contact',
    element: <NovoContato />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
