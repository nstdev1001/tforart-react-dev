import { Timestamp } from "firebase/firestore";

export interface GraphicProjectData {
  thumbnailUrl?: string;
  projectTitle: string;
  id: string;
  projectDescription?: string | null;
  isImageRounded?: boolean;
  gapImage?: {
    0: "0px";
    12: "12px";
    16: "16px";
    20: "20px";
  };
  createdAt?: Timestamp;
  position: number;
}
