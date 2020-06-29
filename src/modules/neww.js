const CHANGE_INPUT = 'neww/CHANGE_INPUT';
const INSERT = 'neww/INSERT';

export const changeInput = ({ inputa, inputp, inputd, inputh }) => ({
  type: CHANGE_INPUT,
  inputa,
  inputp,
  inputd,
  inputh,
});

let id = 1;
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

export const initalState = {
  inputa: '',
  inputp: '',
  inputd: '',
  inputh: '',
  posts: {
    post: [
      {
        id: 1,
        author: '우석',
        place: '제주',
        description: '설명1',
        hashtags: '#해 #바 #라 #기',
      },
      {
        id: 2,
        author: '철수',
        place: '서울',
        description: '설명2',
        hashtags: '#해 #빛',
      },
      {
        id: 3,
        author: '영희',
        place: '부산',
        description: '설명3',
        hashtags: '#해 #마',
      },
      {
        id: 4,
        author: '영구',
        place: '광주',
        description: '설명4',
        hashtags: '#해 #리',
      },
    ],
  },
};

function neww(state = initalState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputa: action.inputa,
        inputp: action.inputp,
        inputd: action.inputd,
        inputh: action.inputh,
      };
    case INSERT:
      return {
        ...state,
        post: state.post.concat(
          action.inputa,
          action.inputp,
          action.inputd,
          action.inputh,
        ),
        posts: state.posts.concat(action.post),
      };

    default:
      return state;
  }
}

export default neww;
