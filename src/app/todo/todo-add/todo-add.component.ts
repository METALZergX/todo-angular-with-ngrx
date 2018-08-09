import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/todo.interface';
import { AddToDoAction } from '../../actions/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit
{
  taskInput: FormControl;

  constructor(private store: Store<AppState>)
  {}

  ngOnInit()
  {
    this.taskInput = new FormControl('', Validators.required);
  }

  addTask()
  {
    if(this.taskInput.valid && this.taskInput.value.trim())
    {
      this.store.dispatch(new AddToDoAction(this.taskInput.value.trim()));
      this.taskInput.setValue('');
    }
  }

}
