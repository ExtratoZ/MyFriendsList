import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/ContatoEnum';
import type Contato from '../../models/Contato';

type FiltroState = {
  termo?: string;
  criterio: 'categoria' | 'todas';
  valor?: enums.Categoria;
};

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas',
  valor: undefined,
};

const filtroSlice = createSlice({
  name: 'Filtro',
  initialState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
  },
});

export const { alterarFiltro, alterarTermo } = filtroSlice.actions;
export default filtroSlice.reducer;
