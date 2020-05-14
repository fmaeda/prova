import axios, { AxiosResponse } from 'axios';
import { RootState } from 'store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { questaoActions } from './';
import { Questao } from 'model/questao';
import { Exame } from 'model/exame';
import { Gabarito } from 'model/gabarito';
import { exameActions } from 'store/exame/index';
import { authActions } from 'store/auth/index';

type Resp = {
  participante: {
    nome: string;
    cpf: string;
    inscricao: string;
  };
  exame: Exame;
  questao: Questao;
  gabarito: Gabarito[];
};

const fetchQuestao = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
> => (
  dispatch,
  // getState,
): Promise<void> => {
  return axios.post('/qpi/pergunta').then(({ data }: AxiosResponse<Resp>) => {
    const {
      exame,
      questao,
      participante: { nome, cpf, inscricao },
    } = data;
    dispatch(questaoActions.setQuestao(questao));
    dispatch(exameActions.setExame(exame));
    dispatch(
      authActions.setUserDetails({
        nome,
        cpf,
        inscricao,
      }),
    );
  });
};

const sendResposta = (): ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
> => (dispatch) => {
  return axios.post('/qpi/resposta').then(() => {
    dispatch(fetchQuestao());
  });
};

export default {
  fetchQuestao,
  sendResposta,
};
