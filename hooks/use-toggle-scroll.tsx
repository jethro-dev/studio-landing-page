import { useEffect } from "react";
import { useLenisStateStore } from "./use-lenis-state-store";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
// Adjust this import according to your file structure

export const useToggleScroll = () => {
  const { isScrollDisabled, setIsScrollDisabled } = useLenisStateStore(
    (state) => state
  );

  // Function to disable scrolling
  const disableScroll = () => {
    disableBodyScroll(document.body);
    setIsScrollDisabled(true);
  };

  // Function to enable scrolling
  const enableScroll = () => {
    enableBodyScroll(document.body);
    setIsScrollDisabled(false);
  };

  // Effect hook to manage adding and removing scroll behavior
  useEffect(() => {
    // If isScrollDisabled is true, disable scrolling
    if (isScrollDisabled) {
      disableScroll();
    } else {
      // If isScrollDisabled is false, enable scrolling
      enableScroll();
    }

    // Cleanup function to enable scroll when the component unmounts or the state changes
    return () => {
      enableBodyScroll(document.body);
    };
  }, [isScrollDisabled]); // This effect depends on isScrollDisabled

  // Exposing the control functions if needed
  return { disableScroll, enableScroll };
};
