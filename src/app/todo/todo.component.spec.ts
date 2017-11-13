/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodosService } from '../todos/todos.service';


describe('Component: Todo', () => {
  let todosService = new TodosService();
  let route : Router;
  let router  :ActivatedRoute;
  it('should create an instance', () => {
    let component = new TodoComponent(this.route,
      this.router,
      this.todosService);
    expect(component).toBeTruthy();
  });
});
