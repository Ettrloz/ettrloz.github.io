type NavbarComponent = {
  init(this: { $el: HTMLElement }): void;
};

document.addEventListener('alpine:init', () => {
  Alpine.data('navbar', (): NavbarComponent => ({
    init() {
      const el = this.$el;

      gsap.fromTo(
        el,
        {
          '--scroll-gap': '0rem'
        },
        {
          '--scroll-gap': '1rem',
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 200,
            scrub: true
          }
        }
      );
    }
  }));
});
