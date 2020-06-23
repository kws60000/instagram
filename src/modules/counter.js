const INCREASE = 'counter/INCREASE';

export const increase = () => ({ type: INCREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    default:
      return state;
  }
}

export default counter;
