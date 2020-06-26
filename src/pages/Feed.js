import React, { useState } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

const Feed = () => {
  const [posts] = useState([
    {
      id: 1,
      name: '우석',
      place: '제주',
      description: '설명1',
      hashtags: '#해 #바 #라 #기',
    },
    {
      id: 2,
      name: '철수',
      place: '서울',
      description: '설명2',
      hashtags: '#해 #빛',
    },
    {
      id: 3,
      name: '영희',
      place: '부산',
      description: '설명3',
      hashtags: '#해 #마',
    },
    {
      id: 4,
      name: '영구',
      place: '광주',
      description: '설명4',
      hashtags: '#해 #리',
    },
  ]);

  return (
    <div>
      <section id="post-list">
        {posts.map((post) => (
          <article key={post.id}>
            <header>
              <div className="user-info">
                <span>{post.name}</span>

                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt={more} />
            </header>

            <footer>
              <div className="actions">
                <button type="button">
                  <img src={like} alt={like} />
                </button>
                <img src={comment} alt={comment} />
                <img src={send} alt={send} />
              </div>

              <strong> 명이 좋아합니다. </strong>
              <p>
                {post.description}
                {post.img}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Feed;
