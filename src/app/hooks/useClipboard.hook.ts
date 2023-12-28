export const useClipboard = () => {
  if (navigator) {
    return navigator.clipboard;
  }
  return null;
};
