import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';

type State = {
  token: string | null;
  nome: string;
  cpf: string;
  inscricao: string;
};

const DEFAULT_STATE: State = {
  token: null,
  nome: '',
  cpf: '',
  inscricao: '',
};

class AuthReducer extends ImmerReducer<State> {
  setToken(token: string) {
    this.draftState.token = token;
  }

  setUserDetails({
    cpf,
    nome,
    inscricao,
  }: Pick<State, 'cpf' | 'nome' | 'inscricao'>) {
    this.draftState.cpf = cpf;
    this.draftState.nome = nome;
    this.draftState.inscricao = inscricao;
  }
}

export const authActions = createActionCreators(AuthReducer);
export const authReducer = createReducerFunction(AuthReducer, DEFAULT_STATE);
