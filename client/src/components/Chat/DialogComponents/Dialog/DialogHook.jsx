import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import className from 'classnames';
import {
  getDialogMessages,
  clearMessageList,
} from '../../../../store/slices/chatSlice';
import ChatHeader from '../../ChatComponents/ChatHeader/ChatHeader';
import styles from './Dialog.module.sass';
import ChatInput from '../../ChatComponents/ChatInut/ChatInput';

function Dialog(props) {
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (props.interlocutor && props.interlocutor?.id) {
      props.getDialog(props.interlocutor.id);
    }
    return () => {
      clearMessageList();
    };
  }, [props.interlocutor?.id]);

  useEffect(() => {
    if (props.interlocutor?.id) {
      props.getDialog(props.interlocutor.id);
    }
  }, [props.interlocutor?.id]);

  useEffect(() => {
    return () => {
      clearMessageList();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messagesEnd.current]);

  //-----

  const renderMainDialog = () => {
    const messagesArray = [];
    const { messages, userId } = props;
    let currentTime = moment();
    messages.forEach((message, i) => {
      if (!currentTime.isSame(message.createdAt, 'date')) {
        messagesArray.push(
          <div key={message.createdAt} className={styles.date}>
            {moment(message.createdAt).format('MMMM DD, YYYY')}
          </div>
        );
        currentTime = moment(message.createdAt);
      }
      messagesArray.push(
        <div
          key={i}
          className={className(
            userId === message.sender ? styles.ownMessage : styles.message
          )}
        >
          <span>{message.body}</span>
          <span className={styles.messageTime}>
            {moment(message.createdAt).format('HH:mm')}
          </span>
          <div ref={messagesEnd} />
        </div>
      );
    });
    return <div className={styles.messageList}>{messagesArray}</div>;
  };

  //-----

  const blockMessage = () => {
    const { userId, chatData } = props;
    const { blackList, participants } = chatData;
    const userIndex = participants.indexOf(userId);
    let message;
    if (chatData && blackList[userIndex]) {
      message = 'You block him';
    } else if (chatData && blackList.includes(true)) {
      message = 'He block you';
    }
    return <span className={styles.messageBlock}>{message}</span>;
  };

  const { chatData, userId } = props;

  const isBlackListDefined =
    chatData?.blackList && chatData.blackList.length > 0;
  const isParticipantsDefined =
    chatData?.participants && chatData.participants.length > 0;

  return (
    <>
      <ChatHeader userId={userId} />
      {renderMainDialog()}
      <div ref={messagesEnd} />
      {isBlackListDefined && chatData.blackList.includes(true) ? (
        blockMessage()
      ) : (
        <ChatInput />
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return state.chatStore;
};

const mapDispatchToProps = (dispatch) => ({
  getDialog: (interlocutorId) =>
    dispatch(getDialogMessages({ interlocutorId })),
  clearMessageList: () => dispatch(clearMessageList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
