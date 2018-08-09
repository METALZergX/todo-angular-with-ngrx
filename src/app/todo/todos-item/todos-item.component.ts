import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators, NgModel } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/todo.interface';
import { ChangeStatusAction, UpdateToDoAction, DeleteToDoAction } from '../../actions/todo.action';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit
{
  @Input() toDo: Todo;
  flagEdit: boolean;
  checkedToDo: FormControl;
  inputEditToDo: FormControl;
  @ViewChild('editFieldView') editField: ElementRef;

  constructor(private store: Store<AppState>)
  {}

  ngOnInit()
  {
    this.checkedToDo = new FormControl(this.toDo.status);
    this.inputEditToDo = new FormControl(this.toDo.text, Validators.required);

    this.checkedToDo.valueChanges.subscribe(value => {
      console.log(value);console.log(this.toDo);
      this.store.dispatch(new ChangeStatusAction(this.toDo.id));
    });
  }

  editTask()
  {
    this.flagEdit = true;
    setTimeout(_ => this.editField.nativeElement.select(), 2);
  }

  blurTask()
  {
    this.flagEdit = false;

    if(this.inputEditToDo.valid && this.inputEditToDo.value.trim())
    {
      let newTitleToDo = this.inputEditToDo.value;
      this.store.dispatch(new UpdateToDoAction({ id: this.toDo.id, title: newTitleToDo.trim() }));
    }
  }

  deleteTask()
  {
    this.store.dispatch(new DeleteToDoAction(this.toDo.id));
  }

}
