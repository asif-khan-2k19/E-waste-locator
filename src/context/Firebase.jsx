import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase , set , ref} from "firebase/database";
import { createContext , useContext} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCymZXCGsFvv0SiVG1VT6EbH-eCCd9Qk68",
    authDomain: "renewit-india.firebaseapp.com",
    projectId: "renewit-india",
    storageBucket: "renewit-india.appspot.com",
    messagingSenderId: "415534969323",
    appId: "1:415534969323:web:58c797447e3591fbe3a9ae",
  databaseURL: "https://renewit-india-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const putData = (key, data) => set(ref(database, key), data);
  return (
    <FirebaseContext.Provider value={{ putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};