import { Todo } from "../todo/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "../reducers/filter.reducer";
import { toDoReducer } from "../reducers/todo.reducer";
import { ValidFilter } from "../actions/filter.action";

export interface Action
{
    type: string, // Action required
    payload?: any // Data for request
}

export interface AppState
{
    todos: Todo[]; // todo.reducer
    filters: ValidFilter //string // filter.reducer
}

// Definicion de Reducers para el StoreModule
export const ReducerInterface: ActionReducerMap<AppState> = {
    todos: toDoReducer, 
    filters: filterReducer
};