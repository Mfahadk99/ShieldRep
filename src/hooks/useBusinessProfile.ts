import { useQuery } from "@tanstack/react-query";
import {
  fetchBusinessProfiles,
  fetchBusinessInsights,
  fetchBusinessReviews,
  fetchBusinessMedia,
  fetchBusinessPosts,
} from "../api/businessProfile";

export const useBusinessProfiles = () =>
  useQuery({
    queryKey: ["businessProfiles"],
    queryFn: fetchBusinessProfiles,
  });

export const useBusinessInsights = (locationId: string) =>
  useQuery({
    queryKey: ["businessInsights", locationId],
    queryFn: () => fetchBusinessInsights(locationId),
    enabled: !!locationId,
  });

export const useBusinessReviews = (locationId: string) =>
  useQuery({
    queryKey: ["businessReviews", locationId],
    queryFn: () => fetchBusinessReviews(locationId),
    enabled: !!locationId,
  });

export const useBusinessMedia = (locationId: string) =>
  useQuery({
    queryKey: ["businessMedia", locationId],
    queryFn: () => fetchBusinessMedia(locationId),
    enabled: !!locationId,
  });

export const useBusinessPosts = (locationId: string) =>
  useQuery({
    queryKey: ["businessPosts", locationId],
    queryFn: () => fetchBusinessPosts(locationId),
    enabled: !!locationId,
  });
