document.addEventListener('alpine:init', () => {
  Alpine.data('techStack', () => ({
    tween: null as gsap.core.Tween | null,
    observer: null as IntersectionObserver | null,

    init() {
      const track = this.$refs.track;
      const group = track.firstElementChild;

      if (!group) {
        return;
      }

      track.append(group.cloneNode(true));

      const gapValue = Number.parseFloat(getComputedStyle(track).gap) || 0;
      const distance = group.getBoundingClientRect().width + gapValue;

      this.tween = gsap.to(track, {
        x: -distance,
        duration: 20,
        ease: 'none',
        repeat: -1
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.tween?.pause();
        } else {
          this.tween?.resume();
        }
      });

      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.tween?.resume();
            } else {
              this.tween?.pause();
            }
          });
        },
        {
          threshold: 0.1
        }
      );

      this.observer.observe(this.$el);
    },

    pause() {
      this.tween?.pause();
    },

    resume() {
      if (!document.hidden && this.observer) {
        this.tween?.resume();
      }
    },

    destroy() {
      this.tween?.kill();
      this.tween = null;
      this.observer?.disconnect();
      this.observer = null;
    }
  }));
});
