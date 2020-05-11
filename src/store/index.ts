import { StateType } from 'typesafe-actions';

import { stepReducer } from 'store/steps';
import { questaoReducer } from 'store/questao';
import { authReducer } from 'store/auth';

const allReducers = {
  steps: stepReducer,
  questao: questaoReducer,
  auth: authReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
