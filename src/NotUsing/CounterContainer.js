import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase } from '../modules/counter';

const CounterContainer = ({ number, increase }) => {
  return <Counter number={number} onIncrease={increase} />;
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
});

export default connect(mapStateToProps, mapDispatchProps)(CounterContainer);
