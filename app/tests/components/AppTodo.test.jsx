let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let AppTodo = require('AppTodo');

describe('AppTodo', () => {

  it('should exist', () => {
    expect(AppTodo).toExist();
  });

  it('should add todo item on handleAddTodo call', () => {
    let todoText = 'Eat';

    let appTodo = TestUtils.renderIntoDocument(<AppTodo/>);
    appTodo.setState({todos: []});
    appTodo.handleAddTodo(todoText);

    expect(appTodo.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed state when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };

    let appTodo = TestUtils.renderIntoDocument(<AppTodo/>);
    appTodo.setState({ todos: [todoData] });

    expect(appTodo.state.todos[0].completed).toBe(false);
    appTodo.handleToggle(11);
    expect(appTodo.state.todos[0].completed).toBe(true);

  })

});
