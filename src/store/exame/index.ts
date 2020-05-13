import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { Exame } from 'model/exame';

type State = Exame;

const DEFAULT_STATE: State = {
  horarioServidor: '',
  horarioInicioProva: '',
  tempoRestante: 0,
  respondidas: 0,
  restantes: 0,
};

class ExameReducer extends ImmerReducer<State> {
  setExame(exame: Exame) {
    this.draftState = exame;
  }
}

export const exameActions = createActionCreators(ExameReducer);
export const exameReducer = createReducerFunction(ExameReducer, DEFAULT_STATE);
