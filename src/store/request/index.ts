import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';

type State = {
  loading: boolean;
};

const DEFAULT_STATE: State = {
  loading: false,
};

class RequestReducer extends ImmerReducer<State> {
  setLoading(loading: boolean) {
    this.draftState.loading = loading;
  }
}

export const requestActions = createActionCreators(RequestReducer);
export const requestReducer = createReducerFunction(
  RequestReducer,
  DEFAULT_STATE,
);
