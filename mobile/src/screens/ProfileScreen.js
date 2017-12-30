import React, { Component } from "react";
import styled from "styled-components/native";

import ProfileHeader from "../components/ProfileHeader";

const Root = styled.View`
  flex: 1;
  /* prettier-ignore */
  backgroundColor: #f1f6fa;
`;

const T = styled.Text``;

class ProfileScreen extends Component {
  state = {};
  render() {
    return (
      <Root>
        <ProfileHeader />
        <T>Profile</T>
      </Root>
    );
  }
}

export default ProfileScreen;
