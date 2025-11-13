// src/stores/TodoStore.js
import { EventEmitter } from "events";
import Dispatcher from "../dispatcher/Dispatcher";

let todos = [];

class TodoStore extends EventEmitter {
  getAll() {
    return todos;
  }

  addChangeListener(callback) {
    this.on("change", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }

  emitChange() {
    this.emit("change");
  }
}

const store = new TodoStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case "ADD_TODO":
      todos.push(action.text);
      store.emitChange();
      break;
    default:
  }
});

export default store;
