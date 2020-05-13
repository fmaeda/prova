import { StateType } from 'typesafe-actions';

import { stepReducer } from 'store/steps';
import { questaoReducer } from 'store/questao';
import { authReducer } from 'store/auth';
import { exameReducer } from 'store/exame';

const allReducers = {
  steps: stepReducer,
  questao: questaoReducer,
  auth: authReducer,
  exame: exameReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
