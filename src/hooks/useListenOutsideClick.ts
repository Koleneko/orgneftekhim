import React, { Ref, useEffect } from "react";

function useOutsideAlerter(
  ref: React.ElementRef<any>,
  callback: () => void,
  additionalRef?: Ref<any>
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        // @ts-ignore
        (ref.current &&
          // @ts-ignore
          !ref.current.contains(event.target)) ||
        // @ts-ignore
        (additionalRef.current &&
          // @ts-ignore
          additionalRef.current.contains(event.target))
      ) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
