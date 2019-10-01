const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload] };

    case "DELETE":
      let todos = [...state.todos];
      todos = todos.filter(todo => todo.id !== action.payload);
      return { todos };

    case "TOGGLE":
      let todosListEdit = [...state.todos];
      todosListEdit = todosListEdit.map(todo => (
        todo.id === action.payload.id
          ? { ...todo, edit: true }
          : todo
      ));
      return { todos: todosListEdit }

    case "UPDATE":
      let todosList = [...state.todos];
        console.log(action.payload);
      todosList = todosList.map(todo => (
        todo.id === action.payload.id
        ? { ...todo, task: action.payload.editTask, edit: false }
        : todo
        ));
      console.log("TODOS LIST", todosList);
      return { todos: todosList };

    default:
      return state;
  }
}

export default rootReducer;