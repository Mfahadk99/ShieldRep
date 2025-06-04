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
  category: "photos" | "reviews" | "posts" | "profile";
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

export type Phase = {
  id: number | string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  progress: number; // should be a number between 0 and 100
  items: string[];
};

export interface AppStats {
  profileViews: number;
  totalReviews: number;
  photosAdded: number;
  postsPublished: number;
}
