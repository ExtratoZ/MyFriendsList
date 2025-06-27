import * as enums from '../utils/enums/ContatoEnum';

class Contato {
  titulo: string;
  email: string;
  telefone: string;
  categoria: enums.Categoria;
  id: number;

  constructor(
    titulo: string,
    email: string,
    telefone: string,
    categoria: enums.Categoria,
    id: number
  ) {
    this.titulo = titulo;
    this.email = email;
    this.telefone = telefone;
    this.categoria = categoria;
    this.id = id;
  }
}

export default Contato;
