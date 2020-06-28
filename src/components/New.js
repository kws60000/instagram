import React from 'react';

import './New.css';

const New = ({
  author,
  place,
  description,
  hashtags,
  onChangeInput,
  onInsert,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert({ author, place, description, hashtags });
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

        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};
export default New;
