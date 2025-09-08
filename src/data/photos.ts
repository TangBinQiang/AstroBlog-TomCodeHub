export interface PhotoEntry {
  icon: string;
  title: string;
  date: string;
  description?: string;
  photos: string[];
}

export const photoEntries: PhotoEntry[] = [
  {
    icon: "🐱",
    title: "Friend's Adorable Cat",
    date: "2025-06-21",
    description: "So kawaii (*^ω^*)",
    photos: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    ],
  },
  {
    icon: "🌅",
    title: "Ningbo · Dongqian Lake",
    date: "2025-03-01",
    description: "Cycling around Dongqian Lake",
    photos: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
    ],
  },
  {
    icon: "🏔️",
    title: "Ningbo · Zhoushan",
    date: "2024-09-07",
    description: "Beautiful mountain views",
    photos: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    ],
  },
];