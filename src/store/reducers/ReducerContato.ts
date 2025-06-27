import { createSlice } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/ContatoEnum';
import Contato from '../../models/Contato';

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      titulo: 'Caetano Messina',
      email: 'devmessina07@gmail.com',
      telefone: '(55) 9 96984259',
      categoria: enums.Categoria.FAMILIA,
      id: 1,
    },
    {
      titulo: 'Alvaro Domingues',
      email: 'alvarodomingueira@gmail.com',
      telefone: '(55) 9 99456352',
      categoria: enums.Categoria.AMIGOS,
      id: 2,
    },
    {
      titulo: 'Biruleibe',
      email: 'birubiru@gmail.com',
      telefone: '(55) 9 99456243',
      categoria: enums.Categoria.TRABALHO,
      id: 3,
    },
    {
      titulo: 'Luciane Messina',
      email: 'lummesshitcrazy@gmail.com',
      telefone: '(55) 9 99456243',
      categoria: enums.Categoria.FAMILIA,
      id: 4,
    },
  ],
};

const ContatoSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {},
});

export default ContatoSlice.reducer;
