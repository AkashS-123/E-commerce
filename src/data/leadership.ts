import henry from "../assets/henry.png"
import micheal from "../assets/micheal.png"
import eden from "../assets/eden.png"
import robert from "../assets/robert.png"
import nathan from "../assets/nathan.png"


export interface Leader {
  name: string;
  title: string;
  image?: string;
}

export const leadership: Leader[] = [
  {
    name: "Henry Avery",
    title: "Chairman",
    image: henry,
  },
  {
    name: "Michael Edward",
    title: "Vice President",
    image: micheal,
  },
  {
    name: "Eden Hazard",
    title: "CEO",
    image: eden,
  },
  {
    name: "Robert Downey Jr",
    title: "CEO",
    image: robert,
  },
  {
    name: "Nathan Drake",
    title: "Strategist Director",
    image: nathan,
  },
];
