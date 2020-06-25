import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert } from '../modules/tags';
import Tags from '../components/Tags';

const TagsContainer = ({ input, tags, changeInput, insert }) => {
  return (
    <Tags
      input={input}
      tags={tags}
      onChangeInput={changeInput}
      onInsert={insert}
    />
  );
};

export default connect(
  ({ tags }) => ({
    input: tags.input,
    tags: tags.tags,
  }),
  {
    changeInput,
    insert,
  },
)(TagsContainer);
