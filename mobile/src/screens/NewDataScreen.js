//New data screen will likely go right to the camera view

import React, { Component } from "react";
import styled from "styled-components/native";
import { Platform, Keyboard } from "react-native";
import Touchable from "@appandflow/touchable";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";

import { colors } from "../utils/constants";
import CREATE_NEW_DATA_MUTATION from "../graphql/mutations/CreateNewData";

const Root = styled.View`
  /* prettier-ignore */
  backgroundColor: ${props => props.theme.WHITE};
  flex: 1;
  /* prettier-ignore */
  alignItems: center;
`;

const Wrapper = styled.View`
  height: 80%;
  width: 90%;
  /* prettier-ignore */
  paddingTop: 5;
  position: relative;
`;

//text is placeholder for video data
const Input = styled.TextInput.attrs({
  multiline: true,
  maxLength: 140,
  placeholder: "What's Your Story",
  //experimental
  selectionColor: Platform.OS === "ios" && colors.PRIMARY,
  autoFocus: true
})`
  height: 40%;
  width: 100%;
  /* prettier-ignore */
  fontSize: 18;
  color: ${props => props.theme.SECONDARY};
`;

const NewDataButton = styled(Touchable).attrs({
  feedback: "opacity",
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 }
})`
/* prettier-ignore */  
  backgroundColor: ${props => props.theme.GRAY_REVISE};
  /* prettier-ignore */
  justifyContent: center;
  /* prettier-ignore */
  alignItems: center;
  width: 100;
  height: 50;
  /* prettier-ignore */
  borderRadius: 10;
  position: absolute;
  top: 60%;
  right: 0;
`;

const NewDataButtonText = styled.Text`
  color: ${props => props.theme.PINK};
  /* prettier-ignore */
  fontSize: 16;
`;

const TextLength = styled.Text`
  /* prettier-ignore */
  fontSize: 18;
  color: ${props => props.theme.PINK};
  position: absolute;
  top: 45%;
  right: 5%;
`;

class NewDataScreen extends Component {
  state = {
    text: ""
  };

  _onChangeText = text => this.setState({ text });

  _onCreateNewDataPress = async () => {
    await this.props.mutate({
      //still to implement: state will depend on image video content
      variables: {
        text: this.state.text
      },
      optimisticResponse: {
        __typename: "Mutation",
        createTweet: {
          __typename: "Tweet",
          text: this.state.text,
          favoriteCount: 0,
          _id: Math.round(Math.random() * 10000000),
          createdAt: new Date(),
          user: {
            __typename: "User",
            username: this.props.user.username
          }
        }
      }
    });
    Keyboard.dismiss();
    this.props.navigation.goBack(null);
  };

  get _textLength() {
    return 140 - this.state.text.length;
  }

  get _buttonDisabled() {
    return this.state.text.length < 5;
  }

  render() {
    return (
      <Root>
        <Wrapper>
          <Input value={this.state.text} onChangeText={this._onChangeText} />
          <TextLength>{this._textLength}</TextLength>
          <NewDataButton onPress={this._onCreateNewDataPress}>
            <NewDataButtonText>Share Your Story</NewDataButtonText>
          </NewDataButton>
        </Wrapper>
      </Root>
    );
  }
}

export default compose(
  graphql(CREATE_NEW_DATA_MUTATION),
  //map state to props
  connect(state => ({ user: state.user.info }))
)(NewDataScreen);
