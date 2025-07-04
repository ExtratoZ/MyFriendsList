import { useState, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer, Pesquisa, Button } from '../../styles';
import * as S from './styles';
import * as enums from '../../utils/enums/ContatoEnum';
import Contato from '../../models/Contato';
import { cadastrar } from '../../store/reducers/ReducerContato';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [escolha, setEscolha] = useState(enums.Categoria.AMIGOS);

  const CadastrarContato = (e: FormEvent) => {
    e.preventDefault();
    const ContatoAdicionar = new Contato(titulo, email, numero, escolha, 9);
    dispatch(cadastrar(ContatoAdicionar));
    navigate('/');
  };

  return (
    <MainContainer>
      <S.FormArea onSubmit={CadastrarContato}>
        <h1>Novo contato</h1>
        <Pesquisa
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <Pesquisa
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          required
        />
        <Pesquisa
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          type="number"
          placeholder="Número"
          required
        />
        <S.Opcoes>
          <h4>Categoria</h4>
          {Object.values(enums.Categoria).map((categoria) => (
            <S.OpcoesItem key={categoria}>
              <S.Opcao
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(e) => setEscolha(e.target.value as enums.Categoria)}
                id={categoria}
                defaultChecked={categoria === enums.Categoria.AMIGOS}
              />
              <label htmlFor={categoria}>{categoria}</label>
            </S.OpcoesItem>
          ))}
        </S.Opcoes>
        <Button type="submit">Cadastrar</Button>
      </S.FormArea>
    </MainContainer>
  );
};

export default Formulario;
