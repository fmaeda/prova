import { StateType } from 'typesafe-actions';

import { stepReducer } from 'store/steps';
import { questaoReducer } from 'store/questao';

const allReducers = {
  steps: stepReducer,
  questao: questaoReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
