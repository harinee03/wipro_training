// src/actions/TodoActions.js
import Dispatcher from "../dispatcher/Dispatcher";

const TodoActions = {
  addTodo(text) {
    Dispatcher.dispatch({
      actionType: "ADD_TODO",
      text: text,
    });
  },
};

export default TodoActions;
