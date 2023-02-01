import { useRef, useEffect } from "react";

export const useAutoFocus = () => {
  const elemntRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    elemntRef.current?.focus();
  }, [elemntRef]);

  return elemntRef;
};
