import React, { Component } from "react";
import { Route } from "react-router-dom";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  // removePhoto = postRemoved => {
  //   const posts = this.state.posts.filter(
  //     post => post.imageLink !== postRemoved
  //   );
  //   this.setState(state => ({ posts }));
  // };

  // addPhoto = postSubmited => {
  //   this.setState(state => ({ posts: state.posts.concat(postSubmited) }));
  // };

  // componentDidMount() {
  //   const posts = SimulateFetchFromDB();
  //   this.setState({ posts });
  // }

  // componentDidUpdate(prevProps, presState) {
  //   console.log(presState);
  //   console.log(this.state);
  // }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={addedPost => {
                this.addPhoto(addedPost);
                history.push("./");
              }}
            />
          )}
        />
      </div>
    );
  }
}

function SimulateFetchFromDB() {
  return [
    {
      id: 0,
      description: "Chick",
      imageLink:
        "https://wallpaperbrowse.com/media/images/POTD_chick_3597497k.jpg",
    },
    {
      id: 1,
      description: "Eagle",
      imageLink:
        "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg",
    },
    {
      id: 2,
      description: "Cat",
      imageLink:
        "https://images.freeimages.com/images/large-previews/2bf/kitty-1375468.jpg",
    },
  ];
}
export default Main;
