import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Photo from "./Photo";

const PhotoWall = props => {
  const { posts } = props;
  return (
    <div>
      <Link to="/AddPhoto" className="addIcon" title="Add Photo">
        Add <br /> photo
      </Link>
      <div className="photoGrid">
        {posts
          .sort((x, y) => y.id - x.id)
          .map(post => <Photo key={post.id} post={post} {...props} />)}
      </div>
    </div>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
