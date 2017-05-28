let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    })
  })

  describe('toggleShowCompletedReducer', () => {
    it('should change showCompleted property', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.toggleShowCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    })
  })

  describe('todosReducer', () => {
    it('should add todo item', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Go for a walk',
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.text);
    })

    it('should switch todo completed status and update dateCompleted value', () => {
      let todos = [{
        id: 123,
        text: 'Add todo',
        completed: true,
        dateCreated: 123,
        dateCompleted: 123
      }];
      let action = {
        type: 'TOGGLE_TODO',
        id: 123,
      };
      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].dateCompleted).toEqual(undefined);
    })
  })





})
