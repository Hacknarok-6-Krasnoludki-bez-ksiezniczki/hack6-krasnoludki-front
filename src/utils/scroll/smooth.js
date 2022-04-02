/*
 * Source: https://gist.github.com/gre/1650294
 * Easing Functions - inspired from http://gizma.com/easing/
 * Reference for many more: https://easings.net/
 * only considering the t value for the range [0, 1] => [0, 1]
 */

const EasingFunctions = {
  // no easing, no acceleration
  linear: (t) => t,
  // accelerating from zero velocity
  easeInQuad: (t) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t) => (t - 1) * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  // accelerating from zero velocity
  easeInQuart: (t) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t) => 1 - (t - 1) * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (t - 1) * t * t * t),
  // accelerating from zero velocity
  easeInQuint: (t) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t) => 1 + (t - 1) * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (t - 1) * t * t * t * t),
  easeOutElastic: (t) => {
    const c4 = (2 * Math.PI) / 3;

    if (t === 0) {
      return 0;
    } if (t === 1) {
      return 1;
    }
    return 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
  easeOutBack: (t, c1 = 1.70158) => {
    const c3 = c1 + 1;

    return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
  },
};

export default EasingFunctions;
