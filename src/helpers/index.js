// Dimenzije viewporta
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

// Provjera da li je element u view portu
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();

  const top = rect.top - (rect.height / 1.6)

  return(top <= 0)
 
};
