import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// NgRx Modules config
import { StoreModule } from "@ngrx/store";
//import { toDoReducer } from './reducers/todo.reducer';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
//import { FormsModule } from "@angular/forms";
import { ReducerInterface } from './interfaces/todo.interface';

// Components App
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodosItemComponent } from './todo/todos-item/todos-item.component';
import { FilterComponent } from './todo/filter/filter.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { environment } from '../environments/environment';
import { FilterListPipe } from './pipes/filter-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosListComponent,
    TodosItemComponent,
    FilterComponent,
    TodoAddComponent,
    FilterListPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ReducerInterface),//{ todos: toDoReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
