let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let Todo = require('Todo');

describe('Todo', () => {

  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle with certain id on elment clicking', () => {
    const todoData = {
      id: 199,
      text: 'test features',
      completed: false
    };

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);

  })

});
