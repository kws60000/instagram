const CHANGE_INPUT = 'add/CHANGE_INPUT';
const INSERT = 'add/INSERT';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 5;
export const insert = (text) => ({
  type: INSERT,
  tag: {
    id: id++,
    text,
  },
});

const initalState = {
  input: '',
  tags: [
    {
      id: '',
      text: '',
    },
  ],
};

function add(state = initalState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        tags: state.tags.concat(action.tag),
      };

    default:
      return state;
  }
}

export default add;
