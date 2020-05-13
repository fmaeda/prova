import axios, { AxiosResponse } from 'axios';
import { RootState } from 'store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { questaoActions } from './';
import { Questao } from 'model/questao';
import { Exame } from 'model/exame';
import { Gabarito } from 'model/gabarito';

type Resp = {
  participante: {
    nome: string;
    cpf: string;
    inscricao: string;
  };
  questao: Questao & {
    exame: Exame;
  };
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
  return axios
    .get('/ibama/api/products')
    .then(({ data }: AxiosResponse<Resp>) => {
      // dispatch(questaoActions.setQuestao(data));
    });
};

export default {
  fetchQuestao,
};
