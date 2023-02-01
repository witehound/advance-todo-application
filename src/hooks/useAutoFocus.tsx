import { useRef, useEffect } from "react";

export const useAutoFocus = () => {
  const inPutRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inPutRef.current?.focus();
  }, []);

  return inPutRef;
};
