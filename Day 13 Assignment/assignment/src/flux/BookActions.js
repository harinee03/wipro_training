import BookDispatcher from "./BookDispatcher";

export const addBook = (bookData) => {
  BookDispatcher.dispatch({
    actionType: "ADD_BOOK",
    payload: bookData,
  });
};
