import React from 'react';

import './New.css';

const New = ({
  inputa,
  inputp,
  inputd,
  inputh,
  onChangeInput,
  onInsert,
  post,
  author,
  place,
  description,
  hashtags,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert({ inputa, inputp, inputd, inputh });
    onChangeInput('');
  };

  const onChange = (e) => onChangeInput(e.target.value); // 원하는 값을 덮어 씌우기
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" />
        <input
          type="text"
          name="author"
          placeholder="아이디"
          value={inputa}
          onChange={onChange}
        />
        <input
          type="text"
          name="place"
          placeholder="위치 추가"
          value={inputp}
          onChange={onChange}
        />
        <input
          type="text"
          name="description"
          placeholder="문구 입력..."
          value={inputd}
          onChange={onChange}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="태그하기"
          value={inputh}
          onChange={onChange}
        />

        <button type="submit">작성하기</button>
        {post}
        {author}
        {place}
        {description}
        {hashtags}
      </form>
    </div>
  );
};
export default New;
