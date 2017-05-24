let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let AddTodo = require('AddTodo');

describe('AddTodo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should submit with valid input value', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = 'Add something';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Add something');
  });

  it('should not submit with empty input', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
