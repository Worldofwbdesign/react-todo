var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '234234253',
          text: 'Add new item',
          completed: false,
          createdAt: 50000
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add todos from locale storage', () => {
      var todos = [{
        id: 1,
        text: 'Feed dog',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }, {
        id: 2,
        text: 'Feed cat',
        completed: false,
        completedAt: undefined,
        createdAt: 34000
      }]
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toBe(2);
      expect(res[1]).toEqual(todos[1]);
    });

    it('should update todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      let updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  describe('authReducer', () => {

    it('should set users uid', () => {
      let action = {
        type: 'LOGIN',
        uid: '11242353453451'
      }
      let res = reducers.authReducer(df([]), df(action));

      expect(res.uid).toEqual(action.uid);
    });

    it('should delete users uid', () => {
      let action = {
        type: 'LOGOUT'
      };
      var auth = {
        uid: '123142564464'
      };
      let res = reducers.authReducer(df(auth), df(action));

      expect(res.uid).toEqual(undefined);
    });
  })
});
