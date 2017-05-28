let expect = require('expect');

let actions = require('actions');

describe('Actions', () => {

  it('should update search text on setSearchText action generator call', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'EAT'
    }

    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }

    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 2
    }

    let res = actions.toggleTodo(2);

    expect(res).toEqual(action);
  });

})
