import React, { Component } from 'react';

import TagsContainer from '../containers/TagsContainer';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';
import run from '../assets/run.jpg';

class Feed extends Component {
  state = {
    feed: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <section id="post-list">
          <article>
            <header>
              <div className="user-info">
                <span>dylan_w.s</span>
                <span className="place">제주 이호테우해변</span>
              </div>
              <img src={more} alt={more} />
            </header>
            <img src={run} alt={run} />
            <footer>
              <div className="actions">
                <button
                  type="button"
                  onClick={() => this.setState({ number: number + 1 })}
                >
                  <img src={like} alt={like} />
                </button>
                <img src={comment} alt={comment} />
                <img src={send} alt={send} />
              </div>

              <strong> {number} 명이 좋아합니다. </strong>
              <p>
                "내가 환경미화 한 길을 달린다"
                <span>#야간세 #제주올레 #이호</span>
              </p>
            </footer>
          </article>

          <TagsContainer />
        </section>
      </div>
    );
  }
}

export default Feed;
