export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Alicia M.",
    rating: 5,
    date: "May 2, 2026",
    title: "Screen is gorgeous",
    body: "Colors are punchy and the size feels right in the hand. Battery easily gets me through a full day.",
  },
  {
    id: "r2",
    author: "Devon P.",
    rating: 4,
    date: "Apr 18, 2026",
    title: "Great phone, camera could be better in low light",
    body: "Overall really happy with it. Daytime shots are excellent, night mode is just okay.",
  },
  {
    id: "r3",
    author: "Priya S.",
    rating: 5,
    date: "Apr 3, 2026",
    title: "Fast shipping, great packaging",
    body: "Arrived a day early and well protected. Setup was painless with the included transfer tool.",
  },
  {
    id: "r4",
    author: "Marcus T.",
    rating: 4,
    date: "Mar 21, 2026",
    title: "Solid upgrade from my old phone",
    body: "Noticeably snappier. The Midnight Blue color looks more like navy in person, which I like.",
  },
  {
    id: "r5",
    author: "Yuki H.",
    rating: 5,
    date: "Mar 9, 2026",
    title: "Would buy again",
    body: "Storage headroom on the 128GB is generous for my photo library. No complaints so far.",
  },
];
