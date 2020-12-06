import{ADD_TODO,REMOVE_TODO,TOGGLE_COMPLETE,EDIT_TASK} from "../const/actionType";


const initState = {
    todos: [{ text: "learn React-redux",  isComplet: false , id:0 }],

}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
          return { ...state, todos: [action.payload, ...state.todos] };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
              };
        case TOGGLE_COMPLETE:
            return {
                  ...state,
                  todos: state.todos.map((todo) =>
                    todo.id === action.payload
                      ? { ...todo, isComplete: !todo.isComplete }
                      : todo
                  ),
                };

        case EDIT_TASK:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                  todo.id === action.payload.id ? action.payload : todo
                ),
              };

              default:
                return state;
            }
          }