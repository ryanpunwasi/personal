import { useState, useEffect } from "react";

export const useClipboard = () => {
  const [clipboard, setClipboard] = useState<Clipboard | null>(null);
  useEffect(() => {
    if (navigator) setClipboard(navigator.clipboard);
  }, []);

  return clipboard;
};
