let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let AppTodo = require('AppTodo');

describe('AppTodo', () => {

  it('should exist', () => {
    expect(AppTodo).toExist();
  })

});
