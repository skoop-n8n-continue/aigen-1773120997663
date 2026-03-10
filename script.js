document.addEventListener('DOMContentLoaded', () => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    // Create a GSAP timeline that repeats infinitely
    const tl = gsap.timeline({ repeat: -1 });

    // Animation Settings
    const slideDuration = 1;      // Duration of the slide in/out transition
    const displayDuration = 2;    // How long the text stays on screen
    const exitX = -100;           // Percentage to slide out to the left
    const enterX = 100;           // Percentage to slide in from the right

    // Slide 1 Sequence
    tl.set(slide1, { visibility: 'visible', opacity: 1, xPercent: enterX })
      .to(slide1, {
          xPercent: 0,
          duration: slideDuration,
          ease: "power2.out"
      })
      .to(slide1, {
          xPercent: exitX,
          duration: slideDuration,
          ease: "power2.in",
          delay: displayDuration
      })
      .set(slide1, { visibility: 'hidden', opacity: 0 });

    // Slide 2 Sequence
    tl.set(slide2, { visibility: 'visible', opacity: 1, xPercent: enterX })
      .to(slide2, {
          xPercent: 0,
          duration: slideDuration,
          ease: "power2.out"
      })
      .to(slide2, {
          xPercent: exitX,
          duration: slideDuration,
          ease: "power2.in",
          delay: displayDuration
      })
      .set(slide2, { visibility: 'hidden', opacity: 0 });
});