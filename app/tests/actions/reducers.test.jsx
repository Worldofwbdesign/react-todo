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

})
