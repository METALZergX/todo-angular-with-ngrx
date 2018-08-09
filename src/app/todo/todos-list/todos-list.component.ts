import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/todo.interface';
import { Todo } from '../models/todo.model';
import { ValidFilter } from '../../actions/filter.action';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit
{
  toDoList: Todo[] = [];
  filterInitial: ValidFilter;

  constructor(private store: Store<AppState>)
  {}

  ngOnInit()
  {
    this.store.subscribe(state => {
      this.toDoList = state.todos;
      this.filterInitial = state.filters;
    });
  }

}
