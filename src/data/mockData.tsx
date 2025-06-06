import type { Achievement, Phase, TaskItem } from "../types/user";

// GET https://mybusinessbusinessinformation.googleapis.com/v1/accounts/{accountId}/locations
export const businessProfiles = {
  "locations": [
    {
      "name": "accounts/123456789012345678901/locations/9876543210",
      "title": "The Coffee Hub",
      "locationName": "the-coffee-hub-san-fran",
      "primaryPhone": "+14155552671",
      "websiteUrl": "https://thecoffeehub.com",
      "locationKey": {
        "placeId": "ChIJrTLr-GyuEmsRBfy61i59si0"
      },
      "address": {
        "regionCode": "US",
        "postalCode": "94105",
        "administrativeArea": "CA",
        "locality": "San Francisco",
        "addressLines": [
          "123 Main Street"
        ]
      },
      "primaryCategory": {
        "displayName": "Coffee Shop"
      },
      "openInfo": {
        "status": "OPEN",
        "canReopen": true
      }
    }
  ]
}
// GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/insights
export const businessProfileInsights = {
  "locationMetrics": [
    {
      "metric": "ALL",
      "timeSeries": [
        {
          "startTime": "2024-05-01T00:00:00Z",
          "endTime": "2024-05-31T23:59:59Z",
          "value": {
            "searchViews": 1200,
            "mapViews": 800,
            "websiteActions": 150,
            "callActions": 70,
            "directionActions": 90
          }
        }
      ]
    }
  ]
}

// GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
export const businessProfileReviews = {
  "reviews": [
    {
      "reviewId": "review123",
      "starRating": "FIVE",
      "comment": "Awesome coffee and great vibes!",
      "reviewer": {
        "displayName": "Alex Johnson"
      },
      "createTime": "2024-05-15T14:20:00Z"
    },
    {
      "reviewId": "review124",
      "starRating": "FOUR",
      "comment": "Love the pastries, a bit pricey though.",
      "reviewer": {
        "displayName": "Monica Lee"
      },
      "createTime": "2024-05-14T10:15:00Z"
    }
  ]
}

// GET https://mybusinessbusinessinformation.googleapis.com/v1/accounts/{accountId}/locations/{locationId}/media
export const businessProfileMediaList = {
  "mediaItems": [
    {
      "mediaFormat": "PHOTO",
      "sourceUrl": "https://example.com/photo1.jpg",
      "description": "Signature Cappuccino",
      "createTime": "2024-04-20T12:00:00Z"
    },
    {
      "mediaFormat": "PHOTO",
      "sourceUrl": "https://example.com/photo2.jpg",
      "description": "Pastry Shelf",
      "createTime": "2024-04-22T15:00:00Z"
    }
  ]
}

// POST https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/localPosts
export const businessProfilePosts = {
  "posts": [
    {
      "postId": "post001",
      "summary": "Start your morning with our new Hazelnut Latte ☕️! Available now.",
      "media": [
        {
          "sourceUrl": "https://example.com/hazelnut.jpg"
        }
      ],
      "createTime": "2024-05-10T10:00:00Z"
    },
    {
      "postId": "post002",
      "summary": "Pastry Happy Hour: 2 for 1 every Friday, 5–7 PM 🍰",
      "createTime": "2024-05-16T10:00:00Z"
    }
  ]
}

export const healthScoreData = {
  "score": 72,
  "breakdown": {
    "coreInfo": 100,
    "services": 70,
    "productsOffers": 60,
    "mediaAndQA": 80,
    "reviewsSocials": 50
  }
}

export const optimizationPhases: Phase[] = [
  {
    id: 1,
    title: "Core Info",
    description: "Complete your basic business information",
    progress: 85,
    status: "completed",
    items: ["Business Name", "Address", "Phone", "Hours", "Category"],
  },
  {
    id: 2,
    title: "Services",
    description: "Add and optimize your service offerings",
    progress: 60,
    status: "in-progress",
    items: ["Service List", "Service Areas", "Pricing Info", "Attributes"],
  },
  {
    id: 3,
    title: "Products/Offers",
    description: "Showcase your products and special offers",
    progress: 30,
    status: "pending",
    items: [
      "Product Catalog",
      "Special Offers",
      "Promotions",
      "Seasonal Updates",
    ],
  },
  {
    id: 4,
    title: "Media & Q&A",
    description: "Upload photos and manage customer questions",
    progress: 45,
    status: "in-progress",
    items: [
      "Business Photos",
      "Interior Photos",
      "Team Photos",
      "Q&A Management",
    ],
  },
  {
    id: 5,
    title: "Reviews & Socials",
    description: "Manage reviews and social media integration",
    progress: 20,
    status: "pending",
    items: [
      "Review Responses",
      "Social Links",
      "Reputation Management",
      "Customer Engagement",
    ],
  },
];

export const recentPosts = [
  {
    id: 1,
    title: "Summer Sale - 30% Off All Services",
    date: "2 days ago",
    status: "published",
  },
  {
    id: 2,
    title: "New Team Member Welcome",
    date: "1 week ago",
    status: "published",
  },
  {
    id: 3,
    title: "Holiday Hours Update",
    date: "2 weeks ago",
    status: "draft",
  },
];

export const recentReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    text: "Excellent service! Highly recommend...",
    date: "1 day ago",
    replied: true,
  },
  {
    id: 2,
    author: "John D.",
    rating: 4,
    text: "Good experience overall, but...",
    date: "3 days ago",
    replied: false,
  },
  {
    id: 3,
    author: "Emma L.",
    rating: 5,
    text: "Outstanding quality and customer service...",
    date: "5 days ago",
    replied: true,
  },
];

export const analyticsData = [
  {
    label: "Profile Views",
    value: "2,847",
    change: "+12%",
    icon: "TrendingUp",
    color: "blue",
  },
  {
    label: "Phone Calls",
    value: "124",
    change: "+8%",
    icon: "Phone",
    color: "green",
  },
  {
    label: "Direction Requests",
    value: "89",
    change: "+15%",
    icon: "MapPin",
    color: "purple",
  },
  {
    label: "Website Clicks",
    value: "456",
    change: "+22%",
    icon: "Globe",
    color: "orange",
  },
];

export const mockTasks: TaskItem[] = [
  {
    id: "1",
    userId: "user1",
    title: "Upload 3 new photos",
    description: "Add interior and food photos to showcase your business",
    category: "photos",
    xpReward: 50,
    isCompleted: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    userId: "user1",
    title: "Respond to 2 reviews",
    description: "Use AI to craft professional responses",
    category: "reviews",
    xpReward: 30,
    isCompleted: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    userId: "user1",
    title: "Create weekly post",
    description: "Share what's new at your business",
    category: "posts",
    xpReward: 40,
    isCompleted: false,
    createdAt: new Date(),
  },
];

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    userId: "user1",
    title: "Photo Enthusiast",
    description: "Uploaded 20+ photos",
    iconName: "camera",
    category: "photos",
    xpReward: 100,
    isUnlocked: true,
    unlockedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: "2",
    userId: "user1",
    title: "Review Responder",
    description: "Respond to 10 reviews",
    iconName: "reply",
    category: "reviews",
    xpReward: 75,
    isUnlocked: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    userId: "user1",
    title: "Week Warrior",
    description: "7-day activity streak",
    iconName: "fire",
    category: "streak",
    xpReward: 50,
    isUnlocked: false,
    createdAt: new Date(),
  },
];