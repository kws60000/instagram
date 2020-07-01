import React from "react";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

const Posts = ({
  posts, // 할 일 목록이 들어 있는 객체
}) => {
  return (
    <div>
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

              <footer>
                <div className="actions">
                  <button type="button">
                    <img src={like} alt={like} />
                  </button>
                  <img src={comment} alt={comment} />
                  <img src={send} alt={send} />
                </div>

                <strong>12명이 좋아합니다. </strong>
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
    </div>
  );
};

export default Posts;
