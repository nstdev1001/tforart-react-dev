import { useState } from "react";

export const useFullScreenGallery = (photos: string[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const openFullScreen = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeFullScreen = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = "";
  };

  const goToNext = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) =>
        prev !== null && prev < photos.length - 1 ? prev + 1 : prev
      );
    }
  };

  const goToPrevious = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : prev
      );
    }
  };

  return {
    currentImageIndex,
    openFullScreen,
    closeFullScreen,
    goToNext,
    goToPrevious,
  };
};
