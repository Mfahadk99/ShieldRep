export interface UserProfile {
  id: string;
  firebaseUid: string;
  email: string;
  name: string;
  businessName?: string;
  profilePicture?: string;
  level: number;
  currentXP: number;
  totalXP: number;
  streak: number;
  lastActiveDate?: Date;
  isOnboardingComplete: boolean;
  createdAt: Date;
}

export interface BusinessProfile {
  id: string;
  userId: string;
  googleBusinessId?: string;
  businessName: string;
  address?: string;
  phone?: string;
  website?: string;
  category?: string;
  rating?: number;
  reviewCount: number;
  photosCount: number;
  postsCount: number;
  healthScore: number;
  createdAt: Date;
}

export interface TaskItem {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: 'photos' | 'reviews' | 'posts' | 'profile';
  xpReward: number;
  isCompleted: boolean;
  completedAt?: Date;
  dueDate?: Date;
  createdAt: Date;
}

export interface Achievement {
  id: string;
  userId: string;
  title: string;
  description?: string;
  iconName: string;
  category: string;
  xpReward: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
  createdAt: Date;
}

export interface AppStats {
  profileViews: number;
  totalReviews: number;
  photosAdded: number;
  postsPublished: number;
}
