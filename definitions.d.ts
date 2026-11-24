import type AlpineType from 'alpinejs'
import type { gsap as GsapType } from 'gsap'
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger'

declare global {
  const Alpine: typeof AlpineType
  const gsap: typeof GsapType
  const ScrollTrigger: typeof ScrollTriggerType

  interface Window {
    Alpine: typeof AlpineType
    __switchTheme: (
      theme?: 'auto' | 'light' | 'dark'
    ) => 'light' | 'dark' | 'light dark'
  }
}

export {}
