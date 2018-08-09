import { Component, OnInit } from '@angular/core';
import { ValidFilter, SetFilterAction } from '../../actions/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/todo.interface';
import { Todo } from '../models/todo.model';
import { CleanCompletedAction } from '../../actions/todo.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent implements OnInit
{
  pendingTasks: number = 0;
  actuallyFilter: ValidFilter;
  listFilters: ValidFilter[] = ['ALL','ACTIVE','COMPLETED'];

  constructor(private store: Store<AppState>)
  {}

  ngOnInit()
  {
    this.store.subscribe(state => {
      this.actuallyFilter = state.filters;
      this.countPendingTask(state.todos);
    });
  }

  changeFilter(filter: ValidFilter)
  {
    this.store.dispatch(new SetFilterAction(filter));
  }

  countPendingTask(Tasks: Todo[])
  {
    this.pendingTasks = Tasks.filter(task => !task.status).length;
  }

  cleanAllCompleted()
  {
    this.store.dispatch(new CleanCompletedAction());
  }

}
