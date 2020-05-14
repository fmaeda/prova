import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { Exame } from 'model/exame';

type State = Exame & {
  timeDiffMillis: number;
  showNotifications: boolean;
};

const DEFAULT_STATE: State = {
  horarioServidor: '',
  tempoRestante: 0,
  respondidas: 0,
  restantes: 0,
  timeDiffMillis: 0,
  showNotifications: true,
};

class ExameReducer extends ImmerReducer<State> {
  setExame({ horarioServidor, ...exame }: Exame) {
    this.draftState = {
      ...exame,
      showNotifications: this.draftState.showNotifications,
      horarioServidor,
      timeDiffMillis: horarioServidor
        ? Date.now() - new Date(horarioServidor).getTime()
        : 0,
    };
  }

  toggleNotifications() {
    this.draftState.showNotifications = !this.draftState.showNotifications;
  }
}

export const exameActions = createActionCreators(ExameReducer);
export const exameReducer = createReducerFunction(ExameReducer, DEFAULT_STATE);
