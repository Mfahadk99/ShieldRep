import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth, handleRedirectResult } from '@/lib/firebase';
import { UserProfile } from '@/types/user';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // TODO: Fetch user profile from backend
        // For now, create a mock profile based on Firebase user
        const mockProfile: UserProfile = {
          id: firebaseUser.uid,
          firebaseUid: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || 'User',
          businessName: 'Acme Coffee Shop',
          profilePicture: firebaseUser.photoURL || undefined,
          level: 3,
          currentXP: 720,
          totalXP: 720,
          streak: 7,
          isOnboardingComplete: true,
          createdAt: new Date(),
        };
        setUserProfile(mockProfile);
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    // Handle redirect result on page load
    handleRedirectResult().then((result) => {
      if (result?.user) {
        console.log('User signed in via redirect:', result.user);
      }
    }).catch((error) => {
      console.error('Redirect result error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, userProfile, loading };
};
