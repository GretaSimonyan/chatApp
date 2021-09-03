import { initializeApp } from 'firebase/app';
import { doc, onSnapshot, getFirestore, collection, addDoc, setDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArmcmW04W9EnRxiJ3aeDPMs9p0rKnaafw",
  authDomain: "chatapp-bd4c2.firebaseapp.com",
  projectId: "chatapp-bd4c2",
  storageBucket: "chatapp-bd4c2.appspot.com",
  messagingSenderId: "1012832472669",
  appId: "1:1012832472669:web:54246174f2ccabe7f687b4",
  measurementId: "G-H1YXCF08MP"
};

initializeApp(firebaseConfig);
const db = getFirestore();

// export async function aaaaaa() {
//   const col = collection(db, 'messages');
//   const snapshot = await getDocs(col);
//   console.log('snapshot', snapshot);
//   console.log('snapshot', snapshot.docs.map(doc => doc.data()));
// };

export const sendMessage = (text, conversationId, senderId) => {
  addDoc(collection(db, "messages"), {
    text,
    conversationId,
    senderId,
    created: new Date(),
  });
};

const unsub = onSnapshot(doc(db, "messages", "asd"), doc => {
  console.log("Current data: ", doc.data());
});

export const subscribeToMessages = (convId, fn) => {
  const q = query(
    collection(db, "messages"),
    where("conversationId", "==", convId),
    orderBy("created", "asc"),
  );
  const unsub2 = onSnapshot(q, snapshot => {
    const allColData = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
      }
    });
    fn(allColData)
  });
  return unsub2;
};

export const saveUserData = ({first_name, last_name, id, picture: { data: { url }}}) => {
  return setDoc(doc(db, "users", id), {
    last_name,
    first_name,
    avatarUrl: url,
  });
};

export const getUser = async() => {
  const querySnapshot = await getDocs(collection(db, "users"));
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
  return setDoc(doc(db, "conversations", convId), {})
    .then((res) => console.log('response', res) || convId);
};

