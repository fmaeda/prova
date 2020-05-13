import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';

import { Questao, Alternativa } from 'model/questao';
import { RootState } from 'store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

type State = {
  questaoAtual: Questao | null;
  alternativaSelecionada?: Alternativa | null;
};

const DEFAULT_STATE: State = {
  questaoAtual: null,
  alternativaSelecionada: null,
};

class QuestaoReducer extends ImmerReducer<State> {
  setQuestao(questao: Questao) {
    this.draftState.questaoAtual = questao;
    this.draftState.alternativaSelecionada = undefined;
  }

  setAlternativa(alternativa: Alternativa | null) {
    this.draftState.alternativaSelecionada = alternativa;
  }
}

export const questaoActions = createActionCreators(QuestaoReducer);
export const questaoReducer = createReducerFunction(
  QuestaoReducer,
  DEFAULT_STATE,
);
export { default as questaoThunks } from './thunks';
