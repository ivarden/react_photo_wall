import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import {
  removePost,
  addPost,
  addComment,
  startAddingPost,
  startLoadingPost,
  loadPosts,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
  loadComments,
} from '../redux/actions';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removePost,
      addPost,
      addComment,
      startAddingPost,
      startLoadingPost,
      loadPosts,
      startRemovingPost,
      startAddingComment,
      startLoadingComments,
      loadComments,
    },
    dispatch
  );

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
