import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Conversation from './../Conversation';
import { fetchUsers } from '../../slices/users';
import { updateAllConversations } from './../../slices/conversations';
import { subscribeToConversations } from './../../initFirebaseSdk';
import styles from './styles.module.scss';

const getConversationUserId = (myId, convId) => {
  let [id1, id2] = convId.split('_');
  return id1 === myId ? id2 : id1;
}

const getUsersIdList = (myId, conversationsList) => {
  console.log('conversationsList', conversationsList);
  return conversationsList.map(({id}) => getConversationUserId(myId, id))
};

export default function ConversationsList() {
  const dispatch = useDispatch();
  const conversationsList = useSelector(store => store.conversations.list);
  const currUser = useSelector(store => store.users.currUser);
  const usersMap = useSelector(store => store.users.usersMap);

  useEffect(()=> {
    const usersIdList = getUsersIdList(currUser.id, conversationsList);
    dispatch(fetchUsers(usersIdList));
  }, [conversationsList]);

  useEffect(() => {
    const unsubscribe = subscribeToConversations(data => dispatch(updateAllConversations(data)));
    return unsubscribe;
  }, []);

  return (
    <div className={styles.conversationsList}>
      {conversationsList.map((conversation) => (
        <Conversation
          key={conversation.id}
          user={usersMap[getConversationUserId(currUser.id, conversation.id)]}
          conversation={conversation}
        />
      ))}
    </div>
  )
};
