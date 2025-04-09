import { Timestamp } from "firebase/firestore";

export interface VideoData {
  id: string;
  linkURL: string;
  videoTitle: string;
  videoDescription?: string | null;
  createdAt?: Timestamp;
  position: number;
}
