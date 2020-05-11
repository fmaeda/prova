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
  dataFinalProva: string | null;
  timeDiffMillis: number;
};

const DEFAULT_STATE: State = {
  token: null,
  nome: '',
  cpf: '',
  inscricao: '',
  timeDiffMillis: 0,
  dataFinalProva: null,
};

class AuthReducer extends ImmerReducer<State> {
  setToken(token: string) {
    this.draftState.token = token;
  }

  setDataFinalProva(dataFinalProva: string) {
    this.draftState.dataFinalProva = dataFinalProva;
  }

  updateClientTimeDiff(serverDate: string | null) {
    this.draftState.timeDiffMillis = serverDate
      ? Date.now() - new Date(serverDate).getTime()
      : 0;
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
