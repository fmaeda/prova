import { StateType } from 'typesafe-actions';

import { stepReducer } from 'store/steps';
import { questaoReducer } from 'store/questao';
import { authReducer } from 'store/auth';
import { exameReducer } from 'store/exame';
import { requestReducer } from 'store/request';

const allReducers = {
  steps: stepReducer,
  questao: questaoReducer,
  auth: authReducer,
  exame: exameReducer,
  request: requestReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
