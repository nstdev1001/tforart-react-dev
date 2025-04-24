import { Timestamp } from "firebase/firestore";

export interface GraphicProjectData {
  thumbnailUrl?: string;
  projectTitle: string;
  id: string;
  projectDescription?: string | null;
  isRoundedImage?: boolean;
  gapImage?: string;
  createdAt?: Timestamp;
  position: number;
}
