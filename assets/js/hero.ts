gsap.registerPlugin(ScrollTrigger);

gsap.from('#hero-headline', {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: 'power2.out',
  onComplete: () => {
    gsap.to('#hero-headline', {
      y: -150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '25% top',
        scrub: true
      }
    });
  }
});
