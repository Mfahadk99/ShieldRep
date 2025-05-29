import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID || "shield-rep-demo"}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "shield-rep-demo",
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID || "shield-rep-demo"}.firebasestorage.app`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "demo-app-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

export const signInWithGoogle = () => {
  return signInWithRedirect(auth, googleProvider);
};

export const handleRedirectResult = () => {
  return getRedirectResult(auth);
};

export const signOutUser = () => {
  return signOut(auth);
};

// Firestore helper functions
export const createUserProfile = async (user: any, additionalData?: any) => {
  if (!user) return;
  
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        level: 1,
        currentXP: 0,
        totalXP: 0,
        streak: 0,
        isOnboardingComplete: false,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user profile:', error);
    }
  }

  return userRef;
};

export const getUserProfile = async (uid: string) => {
  if (!uid) return null;
  
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    }
  } catch (error) {
    console.log('Error fetching user profile:', error);
  }
  
  return null;
};

export const updateUserProfile = async (uid: string, updates: any) => {
  if (!uid) return;
  
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, updates);
  } catch (error) {
    console.log('Error updating user profile:', error);
  }
};

export const getUserTasks = async (uid: string) => {
  if (!uid) return [];
  
  try {
    const tasksRef = collection(db, 'tasks');
    const q = query(tasksRef, where('userId', '==', uid));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.log('Error fetching tasks:', error);
    return [];
  }
};

export const getUserAchievements = async (uid: string) => {
  if (!uid) return [];
  
  try {
    const achievementsRef = collection(db, 'achievements');
    const q = query(achievementsRef, where('userId', '==', uid));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.log('Error fetching achievements:', error);
    return [];
  }
};
