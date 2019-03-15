export interface IState {
  isLoading: boolean;
}

export interface IReducer {
  ui: IState;
}

const initialState: IState = {
  isLoading: false,
};

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}
