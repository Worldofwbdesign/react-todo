import configureMockStore from 'redux-mock-store';
var expect = require('expect');
var actions = require('actions');
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123ret',
        text: 'Some text',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO action', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
    var todos = [{
      id: 3,
      text: 'Feed dog',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }]
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: { completed: false }
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate login action', () => {
    let action = {
      type: 'LOGIN',
      uid: '12345432123456'
    };
    let res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

  it('should generate logout action', () => {
    let action = {
      type: 'LOGOUT'
    };
    let res = actions.logout();

    expect(res).toEqual(action);
  });

  describe('tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      let todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 23456754
        });
      })
      .then(() => done())
      .catch(done)
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      let store = createMockStore({});

      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        let mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should get todos and dispatch ADD_TODOS action', (done) => {
      let store = createMockStore({});

      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        let mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODOS'
        });

        expect(mockActions[0].todos.length).toEqual(1);

        expect(mockActions[0].todos[0].text).toEqual('Something to do');

        done();
      }, done);
    });

  })
});
