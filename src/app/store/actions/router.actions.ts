import { createAction, props } from '@ngrx/store';
import { IRouterPayload } from '../reducers/router.reducers';

export const go = createAction('[Router] go', props<{ params: IRouterPayload }>());
export const back = createAction('[Router] back');
export const forward = createAction('[Router] forward');
