import { StateType } from 'typesafe-actions';

import { stepReducer } from 'store/steps';

const allReducers = {
  steps: stepReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
