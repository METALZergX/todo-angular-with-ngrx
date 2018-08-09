import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/todo.interface';
import { CheckedAllAction } from '../actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit
{
  checkedAllState: boolean = false;

  constructor(private store: Store<AppState>)
  {}

  ngOnInit()
  {}

  checkAllTask()
  {
    this.checkedAllState = !this.checkedAllState;
    this.store.dispatch(new CheckedAllAction(this.checkedAllState));
  }
}
