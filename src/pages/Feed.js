import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import run from '../assets/run.jpg';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>dylan_w.s</span>
              <span className="place">제주시</span>
            </div>
            <img src={more} />
          </header>
          <img src={run} />
          <footer>
            <div className="actions">
              <button
                type="button"
                onClick={() => this.setState({ number: number + 1 })}
              >
                <img src={like} />
              </button>
              <img src={comment} />
              <img src={send} />
            </div>

            <strong> {number} 명이 좋아합니다. </strong>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
