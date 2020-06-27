import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert } from '../modules/add';
import Tags from '../components/Tags';

const TagsContainer = ({ input, tags, changeInput, insert }) => {
  return (
    <Tags
      //상태를 props로 넣어준 상황
      input={input}
      tags={tags}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onChangeInput={changeInput}
      onInsert={insert}
    />
  );
};

export default connect(
  ({ tags }) => ({
    //리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
    //현재 리덕스 상태를 파라미터로 받아옵니다.
    input: tags.input,
    tags: tags.tags,
  }),
  {
    //액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
    //dispatch 를 파라미터로 받아옵니다.
    changeInput,
    insert,
  },
)(TagsContainer);
