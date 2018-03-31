import React, { Component } from 'react';

export default class Comments extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    let comment = ev.target.comment.value;
    const { addComment, id } = this.props;
    addComment(id, comment);
    ev.target.comment.value = '';
  };

  render() {
    return (
      <div>
        {this.props.comments.map((el, idx) => <p key={idx}>{el}</p>)}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
