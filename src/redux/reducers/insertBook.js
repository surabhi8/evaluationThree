const initialState = {
  savedBooks: [],
};
const insertBook = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERTBOOK': {
      return {
        savedBooks: [...state.savedBooks,
          {
            author: action.payload.author,
            title: action.payload.title,
            bookId: action.payload.bookId,
            likes: action.payload.likes,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default insertBook;

