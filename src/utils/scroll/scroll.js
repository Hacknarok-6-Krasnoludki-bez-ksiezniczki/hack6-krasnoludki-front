import animateScroll from './animateScroll';

const getElementPosition = (element) => element.offsetTop;

/* Creates a smooth scrolling experience on click
 * The easing can be picked from the list at smooth.js
 */
function scroll(ref, duration = 1500, easing = 'linear', ...params) {
  // Original position when the user clicks
  const initialPosition = window.scrollY;
  const element = ref.current;
  if (!element) {
    return;
  }

  animateScroll(
    getElementPosition(element),
    initialPosition,
    duration,
    easing,
    ...params,
  );
}
export default scroll;
