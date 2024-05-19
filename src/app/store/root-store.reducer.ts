import { ActionReducerMap } from '@ngrx/store';
import { netlifyReducer } from './reducers/netlify.reducers';
import { NetlifyState } from '@core-models/netlify-state.model';

export const rootReducer: ActionReducerMap<RootStore> = {
  netlify: netlifyReducer,
};

export const OKAERI_STORE = 'okaeriStore';

export interface RootStore {
  netlify: NetlifyState;
}
