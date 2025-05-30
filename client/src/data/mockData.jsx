export const optimizationPhases = [
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
