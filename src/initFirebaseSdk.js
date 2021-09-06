import { initializeApp } from 'firebase/app';
import { doc, onSnapshot, getFirestore, collection, addDoc, setDoc, getDocs, query, orderBy, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyArmcmW04W9EnRxiJ3aeDPMs9p0rKnaafw',
  authDomain: 'chatapp-bd4c2.firebaseapp.com',
  projectId: 'chatapp-bd4c2',
  storageBucket: 'chatapp-bd4c2.appspot.com',
  messagingSenderId: '1012832472669',
  appId: '1:1012832472669:web:54246174f2ccabe7f687b4',
  measurementId: 'G-H1YXCF08MP'
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const sendMessage = (text, conversationId, senderId) => {
  const now = new Date();
  return addDoc(collection(db, 'conversations', conversationId, 'messages'), {
    text,
    // conversationId,
    senderId,
    created: now,
  })
    .then(() => setDoc(
        doc(db, 'conversations', conversationId),
        {
          lastMessageTimeStamp: now,
          lastMessageText: text,
        },
        {merge: true}
      ));
};

// const unsub = onSnapshot(doc(db, 'messages', 'asd'), doc => {
//   console.log('Current data: ', doc.data());
// });

export const subscribeToMessages = (convId, fn) => {
  const q = query(
    collection(db, 'conversations', convId, 'messages'),
    // where('conversationId', '==', convId),
    orderBy('created', 'asc'),
  );
  const unsub = onSnapshot(q, snapshot => {
    const allColData = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
      }
    });
    fn(allColData)
  });
  return unsub;
};

export const saveUserData = ({first_name, last_name, id, picture: { data: { url }}}) => {
  return setDoc(doc(db, 'users', id), {
    last_name,
    first_name,
    avatarUrl: url,
  });
};

export const getUser = async() => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
    }
  });
};

export const getUsers = async(ids) => {
  const q = query(
    collection(db, 'users'),
    where('__name__', 'in', ids),
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
    }
  });
};

export const saveConversationData = (myId, userId) => {
  const convId = [myId, userId].sort().join('_');
  return setDoc(doc(db, 'conversations', convId), {}, {merge: true})
    .then((res) => console.log('response', res) || convId);
};

export const subscribeToConversations = fn => {
  const q = query(
    collection(db, 'conversations'),
    orderBy('lastMessageTimeStamp', 'desc'),
  );
  const unsub = onSnapshot(q, snapshot => {
    const allColData = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
      }
    });
    fn(allColData);
  });
  return unsub;
};
