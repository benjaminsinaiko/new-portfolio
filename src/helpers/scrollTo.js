export default function scrollTo(elementId) {
  const element = document.querySelector(elementId);
  element.scrollIntoView({ behavior: 'smooth' });
}
