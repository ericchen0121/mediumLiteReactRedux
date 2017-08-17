import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Go
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
};

export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);
