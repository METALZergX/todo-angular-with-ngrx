import { Action } from '../interfaces/todo.interface';
//import { Action } from '@ngrx/store';
export const { ADD_TODO, STATUS_TODO, EDIT_TODO, DELETE_TODO, CHECK_ALL, CLEAN_CHECKED } = Object.freeze({ 
    ADD_TODO: 'ADD_TODO', STATUS_TODO: 'STATUS_TODO', EDIT_TODO: 'EDIT_TODO', DELETE_TODO: 'DELETE_TODO', CHECK_ALL: 'CHECK_ALL', CLEAN_CHECKED: 'CLEAN_CHECKED' 
});

export class AddToDoAction implements Action
{
    readonly type = ADD_TODO;

    constructor(public payload: string)
    {}
}

export class ChangeStatusAction implements Action
{
    readonly type = STATUS_TODO;

    constructor(public payload: number)
    {}
}

export class UpdateToDoAction implements Action
{
    readonly type = EDIT_TODO;

    constructor(public payload: object)
    {}
}

export class DeleteToDoAction implements Action
{
    readonly type = DELETE_TODO;

    constructor(public payload: number)
    {}
}

export class CheckedAllAction implements Action
{
    readonly type = CHECK_ALL;

    constructor(public payload: boolean)
    {}
}

export class CleanCompletedAction implements Action
{
    readonly type = CLEAN_CHECKED;
}