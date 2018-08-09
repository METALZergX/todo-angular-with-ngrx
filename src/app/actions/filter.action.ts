import { Action } from '../interfaces/todo.interface';

export const { FILTER } = Object.freeze({ FILTER: 'FILTER_LIST' });

export type ValidFilter = 'ALL'|'ACTIVE'|'COMPLETED';

export class SetFilterAction implements Action
{
    readonly type = FILTER;

    constructor(public payload: ValidFilter)
    {}
}