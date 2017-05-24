let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let TodoList = require('TodoList');
let Todo = require('Todo');

describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component on each todo element', () => {

    const todos = [
      {
        id: 1,
        text: 'Some text'
      }, {
        id: 2,
        text: 'Validate email'
      }, {
        id: 3,
        text: 'Walk with dog'
      }, {
        id: 4,
        text: 'Feed the cat'
      }
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let renderedTodos = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(renderedTodos.length).toBe(4);
  });

});
