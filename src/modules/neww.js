const CHANGE_INPUT = 'neww/CHANGE_INPUT';
const INSERT = 'neww/INSERT';

export const changeInput = ({ author, place, description, hashtags }) => ({
  type: CHANGE_INPUT,
  author,
  place,
  description,
  hashtags,
});

let id = 0;
export const insert = ({ author, place, description, hashtags }) => ({
  type: INSERT,
  post: {
    id: id++,
    author,
    place,
    description,
    hashtags,
  },
});

const initalState = {
  author: '',
  place: '',
  description: '',
  hashtags: '',
  posts: [
    {
      post: {
        id: '',
        author: '',
        place: '',
        description: '',
        hashtags: '',
      },
    },
  ],
};

function neww(state = initalState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        author: action.author,
        place: action.place,
        description: action.description,
        hashtags: action.hashtags,
      };
    case INSERT:
      return {
        ...state,
        post: state.post.concat(
          action.author,
          action.place,
          action.description,
          action.hashtags,
        ),
        posts: state.posts.conat(action.post),
      };

    default:
      return state;
  }
}

export default neww;
