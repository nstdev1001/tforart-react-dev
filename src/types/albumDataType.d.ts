import { Timestamp } from "firebase/firestore";

export interface AlbumData {
  thumbnailUrl?: string;
  albumTitle: string;
  id: string;
  albumDescription?: string | null;
  createdAt?: Timestamp;
  position: number;
}
