import {
  businessProfiles,
  businessProfileInsights,
  businessProfileReviews,
  businessProfileMediaList,
  businessProfilePosts
} from '../data/mockData';

export const fetchBusinessProfiles = async () => {
  await new Promise((res) => setTimeout(res, 500));  // simulate network delay
  return businessProfiles;
};

export const fetchBusinessInsights = async (locationId: string) => {
  await new Promise((res) => setTimeout(res, 500));
  return businessProfileInsights;
};

export const fetchBusinessReviews = async (locationId: string) => {
  await new Promise((res) => setTimeout(res, 500));
  return businessProfileReviews;
};

export const fetchBusinessMedia = async (locationId: string) => {
  await new Promise((res) => setTimeout(res, 500));
  return businessProfileMediaList;
};

export const fetchBusinessPosts = async (locationId: string) => {
  await new Promise((res) => setTimeout(res, 500));
  return businessProfilePosts;
};
