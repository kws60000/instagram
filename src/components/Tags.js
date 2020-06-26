import React from 'react';
import './Tags.css';
import more from '../assets/more.svg';

const TagItem = ({ tag }) => {
  return (
    <div className="real">
      <header>
        <div className="user-info">
          <span>{tag.text}</span>
          <span className="place"></span>
        </div>
        <img src={more} alt="Mais" />
      </header>
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
