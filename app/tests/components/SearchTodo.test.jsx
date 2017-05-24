let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {

  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should handle onSearch on input change', () => {
    let searchText = 'Dog';
    let spy = expect.createSpy();

    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.textSearch.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.textSearch);

    expect(spy).toHaveBeenCalledWith('Dog', false);
  });



});
