# Dark mode demo with SSR

This is a follow up to my [previous dark mode demo](https://github.com/mayank99/dark-mode-demo) where I used a blocking script to: (1) read from local storage, and (2) dynamically create a `<link>` tag for the correct stylesheet.

The goal is still to prevent "Flash of inAccuate coloR Theme ([FART](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/))", but this time I'm using a cookie to store the theme instead of local storage. [Astro](https://astro.build/)'s new SSR capabilities enable me to do this very easily. Check out the comments in `index.astro` to see how it works.

Deployed on Netlify: https://dark-mode-ssr-demo.netlify.app
