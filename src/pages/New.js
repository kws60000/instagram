import React, { useState } from 'react';
import TagsContainer from '../containers/TagsContainer';

import './New.css';

const New = () => {
  const [form, setForm] = useState([
    { author: '' },
    { place: '' },
    { description: '' },
    { hashtags: '' },
  ]);
  const { author, place, description, hashtags } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    setForm({
      author: '',
      place: '',
    });
  };

  return (
    <div>
      <form id="new-post">
        <input type="file" />
        <input
          type="text"
          name="author"
          placeholder="아이디"
          value={author}
          onChange={onChange}
        />
        <input
          type="text"
          name="place"
          placeholder="위치 추가"
          value={place}
          onChange={onChange}
        />
        <input
          type="text"
          name="description"
          placeholder="문구 입력..."
          value={description}
          onChange={onChange}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="태그하기"
          value={hashtags}
          onChange={onChange}
        />

        <button onClick={onClick}>작성하기</button>
      </form>
      <TagsContainer />
    </div>
  );
};
export default New;
