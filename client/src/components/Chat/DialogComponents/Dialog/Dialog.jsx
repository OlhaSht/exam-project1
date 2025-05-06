import React from 'react';
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

class Dialog extends React.Component {
  componentDidMount() {
    this.props.getDialog({ interlocutorId: this.props.interlocutor.id });
    this.scrollToBottom();
  }

  messagesEnd = React.createRef();
  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.interlocutor.id !== this.props.interlocutor.id)
      this.props.getDialog({ interlocutorId: nextProps.interlocutor.id });
  }

  componentWillUnmount() {
    this.props.clearMessageList();
  }
  

  componentDidUpdate() {
    if (this.messagesEnd.current) this.scrollToBottom();
  }

  renderMainDialog = () => {
    const messagesArray = [];
    const { messages, userId } = this.props;
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
          <div ref={this.messagesEnd} />
        </div>
      );
    });
    return <div className={styles.messageList}>
      {messagesArray}
    </div>;
  };

  blockMessage = () => {
    const { userId, chatData } = this.props;
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

  render() {
    const { chatData, userId } = this.props;
    console.log('cd>>>>>>>>>>>>>>>>>>>>>>>>>', chatData);

    const isBlackListDefined = chatData?.blackList && chatData.blackList.length > 0;
    const isParticipantsDefined = chatData?.participants && chatData.participants.length > 0;

    return (
      <>
        <ChatHeader userId={userId} />
        {this.renderMainDialog()}
        <div ref={this.messagesEnd} />
        {isBlackListDefined && chatData.blackList.includes(true) ? (
          this.blockMessage()
        ) : (
          <ChatInput />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('State in mapStateToProps:::::::', state.chatStore);
  return state.chatStore;
};
// const mapStateToProps = (state) => state.chatStore;

const mapDispatchToProps = (dispatch) => ({
  getDialog: (data) => dispatch(getDialogMessages(data)),
  clearMessageList: () => dispatch(clearMessageList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);

//-------------------------------------------------------------------------------------------------
// import React from 'react';
// import { connect } from 'react-redux';
// import moment from 'moment';
// import className from 'classnames';
// import {
//   getDialogMessages,
//   clearMessageList,
// } from '../../../../store/slices/chatSlice';
// import ChatHeader from '../../ChatComponents/ChatHeader/ChatHeader';
// import styles from './Dialog.module.sass';
// import ChatInput from '../../ChatComponents/ChatInut/ChatInput';
// import controller from '../../../../controller';  // Подключаем контроллер

// class Dialog extends React.Component {
//   componentDidMount() {
//     const { interlocutor } = this.props;
//     this.props.getDialog({ interlocutorId: interlocutor.id });
//     this.scrollToBottom();

//     // Подключаемся к WebSocket или аналогичному механизму для получения новых сообщений
//     controller.getChatController().subscribeToNewMessage(interlocutor.id, this.handleNewMessage);
//   }

//   componentWillUnmount() {
//     this.props.clearMessageList();
//     controller.getChatController().unsubscribeFromNewMessage();  // Отключаем подписку
//   }

//   handleNewMessage = (newMessage) => {
//     // Обрабатываем новое сообщение
//     this.props.addMessageToState(newMessage); // Предполагаем, что существует экшен для добавления нового сообщения
//   };

//   messagesEnd = React.createRef();

//   scrollToBottom = () => {
//     this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.interlocutor.id !== this.props.interlocutor.id) {
//       this.props.getDialog({ interlocutorId: nextProps.interlocutor.id });
//     }
//   }

//   componentDidUpdate() {
//     if (this.messagesEnd.current) this.scrollToBottom();
//   }

//   renderMainDialog = () => {
//     const messagesArray = [];
//     const { messages, userId } = this.props;
//     let currentTime = moment();

//     messages.forEach((message, i) => {
//       if (!currentTime.isSame(message.createdAt, 'date')) {
//         messagesArray.push(
//           <div key={message.createdAt} className={styles.date}>
//             {moment(message.createdAt).format('MMMM DD, YYYY')}
//           </div>
//         );
//         currentTime = moment(message.createdAt);
//       }

//       messagesArray.push(
//         <div
//           key={i}
//           className={className(
//             userId === message.sender ? styles.ownMessage : styles.message
//           )}
//         >
//           <span>{message.body}</span>
//           <span className={styles.messageTime}>
//             {moment(message.createdAt).format('HH:mm')}
//           </span>
//           <div ref={this.messagesEnd} />
//         </div>
//       );
//     });
//     return <div className={styles.messageList}>{messagesArray}</div>;
//   };

//   blockMessage = () => {
//     const { userId, chatData } = this.props;
//     const { blackList, participants } = chatData;
//     const userIndex = participants.indexOf(userId);
//     let message;

//     if (chatData && blackList[userIndex]) {
//       message = 'You block him';
//     } else if (chatData && blackList.includes(true)) {
//       message = 'He block you';
//     }

//     return <span className={styles.messageBlock}>{message}</span>;
//   };

//   render() {
//     const { chatData, userId, interlocutor } = this.props;

//     return (
//       <>
//         <ChatHeader interlocutor={interlocutor} />
//         {this.renderMainDialog()}
//         <div ref={this.messagesEnd} />
//         {chatData && chatData.blackList.includes(true) ? (
//           this.blockMessage()
//         ) : (
//           <ChatInput
//             interlocutorId={interlocutor.id}
//             onSendMessage={this.props.onSendMessage}  // Функция для отправки сообщения
//           />
//         )}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => state.chatStore;

// const mapDispatchToProps = (dispatch) => ({
//   getDialog: (data) => dispatch(getDialogMessages(data)),
//   clearMessageList: () => dispatch(clearMessageList()),
//   addMessageToState: (message) => dispatch(addMessageToState(message)),  // Экшен для добавления нового сообщения
//   onSendMessage: (messageBody, interlocutorId) =>
//     controller.getChatController().sendMessage({ messageBody, interlocutorId }), // Отправка сообщения через контроллер
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Dialog);


//------------------------------------------------------------------------------

// import React from 'react';
// import { connect } from 'react-redux';
// import moment from 'moment';
// import classNames from 'classnames';
// import {
//   getDialogMessages,
//   clearMessageList,
//   addMessage,
// } from '../../../../store/slices/chatSlice';
// import ChatHeader from '../../ChatComponents/ChatHeader/ChatHeader';
// import styles from './Dialog.module.sass';
// import ChatInput from '../../ChatComponents/ChatInut/ChatInput';

// class Dialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.messagesEnd = React.createRef();
//   }

//   componentDidMount() {
//     const { interlocutor } = this.props;
//     // Load dialog messages
//     this.props.getDialogMessages({ interlocutorId: interlocutor.id });
//     this.scrollToBottom();
//   }

//   componentDidUpdate(prevProps) {
//     const { interlocutor, messages } = this.props;
    
//     // When interlocutor changes, reload messages
//     if (prevProps.interlocutor.id !== interlocutor.id) {
//       this.props.getDialogMessages({ interlocutorId: interlocutor.id });
//     }
    
//     // Scroll to bottom when messages update
//     if (prevProps.messages !== messages) {
//       this.scrollToBottom();
//     }
//   }

//   componentWillUnmount() {
//     // Clear message list when unmounting the component
//     this.props.clearMessageList();
//   }

//   scrollToBottom = () => {
//     if (this.messagesEnd.current) {
//       this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   renderMainDialog = () => {
//     const { messages, userId } = this.props;
//     let currentTime = moment();
//     const messageElements = messages.map((message, i) => {
//       // Insert date separators
//       if (!currentTime.isSame(message.createdAt, 'day')) {
//         currentTime = moment(message.createdAt);
//         return (
//           <React.Fragment key={message.createdAt}>
//             <div className={styles.date}>
//               {moment(message.createdAt).format('MMMM DD, YYYY')}
//             </div>
//             {this.renderMessage(message, i)}
//           </React.Fragment>
//         );
//       }
//       return this.renderMessage(message, i);
//     });

//     return <div className={styles.messageList}>{messageElements}</div>;
//   };

//   renderMessage = (message, i) => {
//     const { userId } = this.props;
//     return (
//       <div
//         key={i}
//         className={classNames(
//           userId === message.sender ? styles.ownMessage : styles.message
//         )}
//       >
//         <span>{message.body}</span>
//         <span className={styles.messageTime}>
//           {moment(message.createdAt).format('HH:mm')}
//         </span>
//         <div ref={this.messagesEnd} />
//       </div>
//     );
//   };

//   blockMessage = () => {
//     const { userId, chatData } = this.props;
//     const { blackList, participants } = chatData;
//     const userIndex = participants.indexOf(userId);

//     if (blackList[userIndex]) {
//       return <span className={styles.messageBlock}>You blocked this user</span>;
//     } else if (blackList.includes(true)) {
//       return <span className={styles.messageBlock}>You are blocked by this user</span>;
//     }
//     return null;
//   };

//   handleSendMessage = (messageBody) => {
//     const { interlocutor } = this.props;
    
//     // Dispatch action to add a message
//     this.props.addMessage({
//       recipient: interlocutor.id,
//       messageBody,
//     });
//   };

//   render() {
//     const { chatData, userId } = this.props;

//     return (
//       <>
//         <ChatHeader userId={userId} />
//         {this.renderMainDialog()}
//         <div ref={this.messagesEnd} />
//         {chatData && chatData.blackList.includes(true) ? (
//           this.blockMessage()
//         ) : (
//           <ChatInput onSendMessage={this.handleSendMessage} />
//         )}
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   ...state.chatStore,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getDialogMessages: (data) => dispatch(getDialogMessages(data)),
//   clearMessageList: () => dispatch(clearMessageList()),
//   addMessage: (data) => dispatch(addMessage(data)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
