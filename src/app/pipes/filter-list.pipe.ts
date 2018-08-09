import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { ValidFilter } from '../actions/filter.action';

@Pipe({
  name: 'filterListPipe'
})
export class FilterListPipe implements PipeTransform
{
  transform(tasks: Todo[], filter: ValidFilter): Todo[]
  {
    switch(filter)
    {
      case 'COMPLETED':
        return tasks.filter(task => task.status);
      case 'ACTIVE':
        return tasks.filter(task => !task.status);
      default:
        return tasks;
    }
  }

}
