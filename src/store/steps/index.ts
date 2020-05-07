import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';

import { Disciplina, Step } from 'model/disciplina';

type State = Step[];

const DEFAULT_STATE: State = [];

class StepsReducer extends ImmerReducer<State> {
  setSteps(steps: Step[]) {
    this.draftState = steps;
  }

  increment() {
    const idx = this.draftState.findIndex(
      step => step.total > 0 && step.total !== step.concluidos,
    );
    if (idx >= 0) {
      const concluidos = ++this.draftState[idx].concluidos;
      if (
        concluidos === this.draftState[idx].total &&
        idx < this.draftState.length - 1
      ) {
        this.draftState[idx + 1].total = 10;
        this.draftState[idx + 1].concluidos = 1;
      }
    }
  }
}

export const stepActions = createActionCreators(StepsReducer);
export const stepReducer = createReducerFunction(StepsReducer, DEFAULT_STATE);
export const stepSelectors = {
  currentStep: (state: State) =>
    state.find(({ total, concluidos }) => total > 0 && total !== concluidos),
};
