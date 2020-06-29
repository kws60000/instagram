import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert } from '../modules/neww';
import New from '../components/New';

const NewContainer = ({
  author,
  place,
  description,
  hashtags,
  post,
  changeInput,
  insert,
}) => {
  return (
    <New
      //상태를 props로 넣어준 상황
      inputa={author}
      inputp={place}
      inputd={description}
      inputh={hashtags}
      post={post}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onChangeInput={changeInput}
      onInsert={insert}
    />
  );
};

export default connect(
  ({ post }) => ({
    //리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
    //현재 리덕스 상태를 파라미터로 받아옵니다.
    //내가 생각하기에 왼쪽은 스토어의 상태를 받는 컴포넌트의 props
    //오른쪽은 리덕스 스토어 안의 상태인 듯
    author: post.inputa,
    inputp: post.inputp,
    inputd: post.inputd,
    inputh: post.inputh,
    post: post.post,
  }),
  {
    //액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
    //dispatch 를 파라미터로 받아옵니다.
    changeInput,
    insert,
  },
)(NewContainer);
