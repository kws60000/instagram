import React, { Component } from 'react';

import './New.css';

class New extends Component {
  state = {
    impage: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  render() {
    return (
      <form id="new-post">
        <input type="file" />
        <input type="text" name="author" placeholder="아이디" />
        <input type="text" name="place" placeholder="위치 추가" />
        <input type="text" name="description" placeholder="문구 입력..." />
        <input type="text" name="hashtags" placeholder="태그하기" />

        <button type="submit">작성하기</button>
      </form>
    );
  }
}

export default New;
