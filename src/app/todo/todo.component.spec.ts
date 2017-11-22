/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { TodosService } from '../todos/todos.service';


describe('Component: Todo', () => {
  let todosService = new TodosService();
  let router: Router;
  let route: ActivatedRoute = new ActivatedRoute();
  let params = {};
  let component = new TodoComponent(route,
    router,
    todosService);

  TestBed.configureTestingModule({
    declarations: [TodoComponent],
    imports: [],
    providers: [ActivatedRoute, Router]
    //   {
    //     provide: ActivatedRoute, useValue: {
    //       params: Observable.of({ id: 2 })
    //     }
    //   },{
    //     provide : Router
    //   }
    // ]
  });

  it('should create an instance', () => {

    expect(component).toBeTruthy();
  });

  it('should cover init', async(() => {
    route.params = Observable.of({ "id": 2 });
    component.ngOnInit();
    console.log(component.todo);
    expect(component.todo.title).toEqual('Todo 2');
  }));
});
