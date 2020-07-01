import React from "react";
import { connect } from "react-redux";
import { changeInput } from "../modules/posts";
import Make from "../components/Make";

const MakeContainer = ({ input, changeInput }) => {
  return <Make input={input} onChangeInput={changeInput} />;
};

export default connect(
  (posts) => ({
    input: posts.ipnut,
  }),
  { changeInput }
)(MakeContainer);
