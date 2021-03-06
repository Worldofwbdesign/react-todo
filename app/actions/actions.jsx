import firebase, {firebaseRef, githubProvider} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    let uid = getState().auth.uid;
    let todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    });
  }
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

export let startAddTodos = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.uid;
    let todosRef = firebaseRef.child(`users/${uid}/todos`).once('value');
    return todosRef.then((snapshot) => {
      let todos = snapshot.val();
      if (todos) {
        let keys = Object.keys(snapshot.val());
        let todosArray = keys.map((key) => {
          return {
            id: key,
            ...todos[key]
          }
        });
        dispatch(addTodos(todosArray));
      }
    })
  }
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
      let uid = getState().auth.uid;
      let todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
      let updates = {
        completed,
        completedAt: completed ? moment().unix() : null
      }

      return todoRef.update(updates).then(() => {
        dispatch(updateTodo(id, updates))
      });
  }
};

export let login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

export let logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export let startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('The result is ', result);
    }, (error) => {
      console.log('Unable to auth ', error)
    });
  }
};

export let startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logout success!')
    })
  }
};
