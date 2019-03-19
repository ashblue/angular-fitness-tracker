import * as uiReducer from './shared/ui.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  ui: uiReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: uiReducer.uiReducer,
};

export const getUiState = createFeatureSelector<uiReducer.State>('ui');
export const getIsLoading = createSelector(getUiState, uiReducer.getIsLoading);
