import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const {
      posts,
      addComment,
      startAddingComment,
      match: { params: { id } },
      comments,
      loading,
    } = this.props;
    const post = posts.find(post => Number(post.id) === Number(id));
    const postComments = comments[id] || [];
    if (loading) {
      return <div className="loader">...loading</div>;
    } else if (post) {
      return (
        <div className="single-photo">
          <Photo post={post} {...this.props} />
          <Comments
            addComment={startAddingComment}
            comments={postComments}
            id={id}
          />
        </div>
      );
    } else {
      return <h1>sorry no post found</h1>;
    }
  }
}
