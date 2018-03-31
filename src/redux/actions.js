import { database } from '../database/config';

export const startAddingPost = post => dispatch =>
  database
    .ref('posts')
    .update({ [post.id]: post })
    .then(() => {
      dispatch(addPost(post));
    })
    .catch(error => console.log(error));

export const startAddingComment = (id, comment) => dispatch =>
  database
    .ref(`comments/${id}`)
    .push(comment)
    .then(() => {
      dispatch(addComment(id, comment));
    })
    .catch(error => console.log(error));

export const startLoadingComments = () => dispatch =>
  database
    .ref('comments')
    .once('value')
    .then(snapshot => {
      let comments = {};
      snapshot.forEach(childSnapshot => {
        comments[childSnapshot.key] = Object.values(childSnapshot.val());
      });
      dispatch(loadComments(comments));
    })
    .catch(error => console.log(error));

export const startLoadingPost = () => dispatch =>
  database
    .ref('posts')
    .once('value')
    .then(snapshot => {
      let posts = [];
      snapshot.forEach(childSnapshot => {
        posts.push(childSnapshot.val());
      });
      dispatch(loadPosts(posts));
    })
    .catch(error => console.log(error));

export const startRemovingPost = id => {
  const updates = {
    [`posts/${id}`]: null,
    [`comments/${id}`]: null,
  };
  return dispatch =>
    database
      .ref()
      .update(updates)
      .then(() => dispatch(removePost(id)))
      .catch(error => console.log(error));
};
//remove post
export const removePost = index => ({
  type: 'REMOVE_POST',
  index,
});
//add post
export const addPost = post => ({
  type: 'ADD_POST',
  post,
});
//add comment
export const addComment = (id, comment) => ({
  type: 'ADD_COMMENT',
  id,
  comment,
});
//load posts
export const loadPosts = posts => ({
  type: 'LOAD_POSTS',
  posts,
});
//load comments
export const loadComments = comments => ({
  type: 'LOAD_COMMENTS',
  comments,
});
