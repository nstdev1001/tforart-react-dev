import { Timestamp } from "firebase/firestore";

export interface GraphicProjectData {
  thumbnailUrl?: string;
  projectTitle: string;
  id: string;
  projectDescription?: string | null;
  createdAt?: Timestamp;
  position: number;
}
