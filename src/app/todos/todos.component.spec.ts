/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodosService } from '../todos/todos.service';

describe('Component: Todos', () => {
  let todoServices = new TodosService();

  it('should create an instance', () => {
    let todoServices = new TodosService();
    let component = new TodosComponent(this.todoServices);
    expect(component).toBeTruthy();
  });

  it('should have todos length equalt to 3', () => {
    let todos = todoServices.findAll();
    expect(todos.length).toEqual(3);
  });

  it('should add todos', () => {
    todoServices.add({title : 'Todos 4'});
    let todos = todoServices.findAll();
    expect(todos.length).toEqual(4);
  });

  it('should delete todo', () => {
    todoServices.add({title : 'Todos 4'});
    let todos = todoServices.findAll();
    expect(todos.length).toEqual(4);
  });
});
