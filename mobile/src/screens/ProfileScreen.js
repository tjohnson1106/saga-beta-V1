import React, { Component } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { graphql, compose } from "react-apollo";

import ProfileHeader from "../components/ProfileHeader";

// import GET_USER_TWEETS_QUERY from "../graphql/queries/getUserData";

const Root = styled.View`
  flex: 1;
  /* prettier-ignore */
  backgroundColor: #f1f6fa;
`;

const T = styled.Text``;

class ProfileScreen extends Component {
  state = {};
  render() {
    const { info } = this.props;
    return (
      <Root>
        <ProfileHeader {...info} />
        <T>Profile</T>
      </Root>
    );
  }
}

export default connect(state => ({
  info: state.user.info
}))(ProfileScreen);
