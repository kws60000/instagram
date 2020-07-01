import React from "react";

const Make = ({ inputa, inputp, inputd, inputh, onChangeInput }) => {
  const input = { inputa, inputp, inputd, inputh };
  const onSubmit = (e) => {
    e.preventDefault();
    onChangeInput("");
  };
  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" />
        <input
          type="text"
          name="author"
          placeholder="아이디"
          value={input.inputa}
          onChange={onChange}
        />
        <input
          type="text"
          name="place"
          placeholder="위치 추가"
          value={input.inputp}
          onChange={onChange}
        />
        <input
          type="text"
          name="description"
          placeholder="문구 입력..."
          value={input.inputd}
          onChange={onChange}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="태그하기"
          value={input.inputh}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Make;
