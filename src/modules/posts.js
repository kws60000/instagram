const CHANGE_INPUT = "posts/CHANGE_INPUT";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

const initialState = {
  input: "",
  posts: [
    {
      id: 1,
      author: "우석",
      place: "제주",
      description: "설명1",
      hashtags: "#해 #바 #라 #기",
    },
    {
      id: 2,
      author: "철수",
      place: "서울",
      description: "설명2",
      hashtags: "#해 #빛",
    },
  ],
};

function posts(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
}

export default posts;
