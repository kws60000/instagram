const CHANGE_INPUT = 'neww/CHANGE_INPUT';
const INSERT = 'neww/INSERT';

export const changeInput = ({ author, place, description, hashtags }) => ({
  type: CHANGE_INPUT,
  author,
  place,
  description,
  hashtags,
});

let id = 5;
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
        posts: state.posts.concat(action.post),
      };

    default:
      return state;
  }
}

export default neww;
