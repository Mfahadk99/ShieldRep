import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth, handleRedirectResult, createUserProfile, getUserProfile } from '@/lib/firebase';

interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  photoURL?: string;
  level: number;
  currentXP: number;
  totalXP: number;
  streak: number;
  isOnboardingComplete: boolean;
  createdAt: any;
  businessName?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        try {
          // Create user profile if it doesn't exist
          await createUserProfile(firebaseUser);
          
          // Fetch user profile from Firestore
          const profile = await getUserProfile(firebaseUser.uid);
          setUserProfile(profile as UserProfile);
        } catch (error) {
          console.error('Error handling user profile:', error);
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    // Handle redirect result on page load
    handleRedirectResult().then(async (result) => {
      if (result?.user) {
        console.log('User signed in via redirect:', result.user);
        // Create profile for new user
        await createUserProfile(result.user);
      }
    }).catch((error) => {
      console.error('Redirect result error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, userProfile, loading };
};
