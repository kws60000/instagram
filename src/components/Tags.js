import React from 'react';
import './Tags.css';

const TagItem = ({ tag }) => {
  return (
    <div>
      <span>{tag.text}</span>
    </div>
  );
};

const Tags = ({ input, tags, onChangeInput, onInsert }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <section id="tagList">
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>

      <div className="please">
        {tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} />
        ))}
      </div>
    </section>
  );
};

export default Tags;
