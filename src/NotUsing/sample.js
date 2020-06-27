import React from 'react';

import './New.css';

const sample = () => {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    const data = new FormData();

    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    alert(this.state.author + ': ' + this.state.place);
    this.props.history.push('/');
  };

  return (
    <form id="new-post">
      <input type="file" />
      <input
        type="text"
        name="author"
        placeholder="아이디"
        value={this.state.author}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="place"
        placeholder="위치 추가"
        value={this.state.place}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="문구 입력..."
        value={this.state.description}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="태그하기"
        value={this.state.hashtags}
        onChange={this.handleChange}
      />

      <button onClick={this.handleClick}>작성하기</button>
    </form>
  );
};

export default sample;
