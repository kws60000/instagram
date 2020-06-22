import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <img src={more} />
          </header>
          <footer>
            <div className="actions">
              <button type="button">
                <img src={like} />
              </button>
              <img src={comment} />
              <img src={send} />
            </div>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
