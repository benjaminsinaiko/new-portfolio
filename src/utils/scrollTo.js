const scrollTo = elementId => () => {
  const element = document.querySelector(elementId);
  element.scrollIntoView();
};

export default scrollTo;
