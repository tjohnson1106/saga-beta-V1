// import React, { Component } from "react";
// import styled from "styled-components/native";
// import { connect } from "react-redux";
// import { connectActionSheet } from "@expo/react-native-action-sheet";
// import { withApollo } from "react-apollo";

// import { logout } from "../actions/user";

// import Loading from "./Loading";
// import AddDataButtonHeader from "./AddDataButtonHeader";

// const AVATAR_SIZE = 30;
// const AVATAR_RADIUS = AVATAR_SIZE / 2;

// const Avatar = styled.Image`
// height: ${AVATAR_SIZE};
// width: ${AVATAR_SIZE};
// /* prettier-ignore */
// borderRadius: ${AVATAR_RADIUS};
// `;

// class HeaderAvatar extends Component {
//   _onOpenActionSheet = () => {
//     const options = ["Logout", "Cancel"];
//     const destructiveButtonIndex = 0;
//     this.props.showActionSheetWithOptions(
//       {
//         options,
//         destructiveButtonIndex
//       },
//       buttonIndex => {
//         if (buttonIndex === 0) {
//           this.props.client.resetStore();
//           return this.props.logout();
//         }
//       }
//     );
//   };

//   render() {
//     //if no info/info is nill
//     if (!this.props.info) {
//       return (
//         <AddDataButtonHeader side="left" disabled>
//           <Loading size="small" />
//         </AddDataButtonHeader>
//       );
//     }
//     return (
//       <AddDataButtonHeader side="left">
//         <Avatar source={{ uri: this.props.info.avatar }} />
//       </AddDataButtonHeader>
//     );
//   }
// }

// export default withApollo(
//   connect(state => ({ info: state.user.info }), { logout })(
//     connectActionSheet(HeaderAvatar)
//   )
// );
