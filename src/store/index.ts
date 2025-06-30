import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from '../store/reducers/ReducerContato';
import filtroReducer from '../store/reducers/ReducerFiltro';

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtros: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
