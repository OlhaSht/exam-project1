import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPreviewChat } from '../../../../store/slices/chatSlice';
import DialogList from '../DialogList/DialogList';

function DialogListContainer({ messagesPreview, userId, getChatPreview }) {
  useEffect(() => {
    getChatPreview();
  }, [getChatPreview]);
  return <DialogList preview={messagesPreview} userId={userId} />;
}

const mapStateToProps = (state) => state.chatStore;

const mapDispatchToProps = (dispatch) => ({
  getChatPreview: () => dispatch(getPreviewChat()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogListContainer);

//====2===
// function DialogListContainer(props) {
//   useEffect(() => {
//     props.getChatPreview();
//   }, []);

//   return <DialogList preview={props.messagesPreview} userId={props.userId} />;
// }
