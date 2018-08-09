import { Action } from '../interfaces/todo.interface';
//import { Action } from '@ngrx/store';
import { ADD_TODO, STATUS_TODO, EDIT_TODO, DELETE_TODO, CHECK_ALL, CLEAN_CHECKED } from '../actions/todo.action';
import { Todo } from '../todo/models/todo.model';

export function toDoReducer(state: Todo[] = [], action: Action): Todo[]
{
    switch(action.type)
    {
        case ADD_TODO:
            return [...state, new Todo(action.payload)];
        case STATUS_TODO:
            return state.map(task => {
                return (task.id === action.payload) ? { ...task, status: !task.status } : task;
            });
        case EDIT_TODO:
            return state.map(task => {
                return (task.id === action.payload.id) ? { ...task, text: action.payload.title } : task;
            });
        case DELETE_TODO:
            return state.filter(task => task.id !== action.payload);
        case CHECK_ALL:
            return state.map(task => {
                return { ...task, status: action.payload };
            });
        case CLEAN_CHECKED:
            return state.filter(task => !task.status);
        default:
            return state;
    }
}