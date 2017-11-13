import { AppPage } from './app.po';
import { browser, by, element, $ } from 'protractor';

describe('protractor-angular2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    //page.navigateTo();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    let text = element(by.css('.title-text'));
    expect(text.getText()).toEqual('Welcome To Protractor');
  });

  it('should count todos', () => {
    browser.sleep(2000);
    //page.navigateTo();
    let text = element.all(by.css('.todos .todo'));
    expect(text.count()).toEqual(3);
  });

  it("should be able to add a new todo", () => {
    browser.sleep(2000);
    let newTodoInput = element(
      by.css(".add-todo input[type=text]"));
    newTodoInput.sendKeys("Todo 4");

    let newTodoSubmitButton = element(
      by.css(".add-todo input[type=submit]"));
    newTodoSubmitButton.click();
    browser.sleep(2000);
    let todos = element.all(by.css(".todos .todo"));
    expect(todos.count()).toEqual(4);
  });

  it("should be able to click on a todo on the homepage and get to the details page", () => {
    browser.sleep(2000);
    let firstTodo = element.all(by.css(".todos .todo")).first();
    let firstTodoText = firstTodo.getText();

    firstTodo.click();
    browser.sleep(2000);
    let inputFieldText = element(by.css("input[type=text]")).getAttribute("value");

    expect(inputFieldText).toEqual(firstTodoText);
    page.navigateTo();
  });

  it("should be able to delete a todo", () => {
    let firstTodo = element.all(by.css(".todos .todo")).first();

    firstTodo.click();

    let deleteLink = element(by.cssContainingText("span", "Delete"));
    deleteLink.click();

    let todosList = element.all(by.css(".todos .todo"));

    expect(todosList.count()).toEqual(2);
  });

  it("should be able to edit a todo title", () => {
    let firstTodo = element.all(by.css(".todos .todo")).first();
    firstTodo.click();

    let todoInputField = element(by.css("input[type=text]"));
    todoInputField.clear();
    todoInputField.sendKeys("Editted Todo1 Title");

    let saveButton = element(by.css("button[type=submit]"));
    saveButton.click();
    browser.sleep(2000);
    firstTodo = element.all(by.css(".todos .todo")).first();
    let firstTodoText = firstTodo.getText();

    expect(firstTodoText).toEqual("Editted Todo1 Title");
  });

  it("should not be able to save an empty todo", () => {
    let newTodoInput = element(by.css(".add-todo input[type=text]"));
    browser.sleep(1000);

    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));
    newTodoSubmitButton.click();

    let todos = element.all(by.css(".todos .todo"));
    expect(todos.count()).toEqual(2);
  });

  it("should have add todo button be disabled initially", () => {
    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));

    expect(newTodoSubmitButton.isEnabled()).toEqual(false);
    browser.sleep(1000);
  });

  it("should only enable save todo button when we start typing a new todo title", () => {
    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));
    let newTodoInputField = element(by.css(".add-todo input[type=text]"));

    newTodoInputField.sendKeys("New Todo 4");

    expect(newTodoSubmitButton.isEnabled()).toEqual(true);
  });

});
