import smooth from './smooth';

function animateScroll(targetPosition, initialPosition, duration, easing, ...params) {
  let start;
  let position;
  let animationFrame;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // this just gives us a number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    const easedProgress = smooth[easing](relativeProgress, ...params);

    // calculate new position for every tick of the requestAnimationFrame
    position = initialPosition - amountOfPixelsToScroll * easedProgress;

    // set the scrollbar position
    window.scrollTo(0, position);

    // Stop when relative progress is done
    if (relativeProgress >= 1) {
      window.cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = window.requestAnimationFrame(step);
    }
  }

  animationFrame = window.requestAnimationFrame(step);
}

export default animateScroll;
