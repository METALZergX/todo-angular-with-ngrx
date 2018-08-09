import { Action } from '../interfaces/todo.interface';

import { ValidFilter, FILTER } from '../actions/filter.action';

export function filterReducer(state: ValidFilter = 'ALL', action: Action): ValidFilter
{
    switch(action.type)
    {
        case FILTER:
            return action.payload;
        default:
            return state;
    }
}