export const generateUUI = (): number => Date.now() + Math.random();

export const getCurrentTime = (): string => {
  const date = new Date();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = +`0${minutes}`;
  }

  return date.getHours() + ':' + minutes;
};
