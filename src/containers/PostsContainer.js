import React from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts";

const PostsContainer = ({ posts }) => {
  return <Posts posts={posts} />;
};

export default connect(
  // 비구조화 할당을 통해 todos를 분리하여
  // state.todos.input 대신 todos.input을 사용
  ({ posts }) => ({
    posts: posts.posts,
  })
)(PostsContainer);
