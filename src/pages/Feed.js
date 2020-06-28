import React, { useState } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

import eyes from '../assets/eyes.jpg';

const Feed = () => {
  const [likes, setLikes] = useState(0);
  const [posts] = useState([]);

  return (
    <div>
      <section id="post-list">
        {posts.map((post) => (
          <article key={post.id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>

                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt={more} />
            </header>
            <img src={eyes} alt={eyes}></img>
            <footer>
              <div className="actions">
                <button type="button" onClick={() => setLikes(likes + 1)}>
                  <img src={like} alt={like} />
                </button>
                <img src={comment} alt={comment} />
                <img src={send} alt={send} />
              </div>

              <strong>12{likes} 명이 좋아합니다. </strong>
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
