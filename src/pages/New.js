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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.author + ': ' + this.state.place);
    this.setState({
      author: '',
      place: '',
    });
  };

  render() {
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
  }
}

export default New;
