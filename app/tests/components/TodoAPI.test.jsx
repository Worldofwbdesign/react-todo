let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('shoult exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it('should set valid todos array into localStorage', () => {
      const todos = [{
        id: 11,
        text: 'test all features',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos into localStorage', () => {
      const badTodos = {id: '2'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {

    it('should get valid todos array from localStorage', () => {
      const todos = [{
        id: 11,
        text: 'test all features',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      expect(TodoAPI.getTodos()).toEqual(todos);
    });

    it('should get empty array if localStorage is empty', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

  });

  describe('filterTodos', () => {
    let todos = [
      {
        id: 1,
        text: 'Some test text',
        completed: true
      }, {
        id: 2,
        text: 'Another test text',
        completed: false
      }, {
        id: 3,
        text: 'Awesome test text',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only incompleted items if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos and show first incompleted', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should show all items if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter items by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

  })

})
