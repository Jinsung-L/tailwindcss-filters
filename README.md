# DEPRECATED: [tailwindcss now supports native filters and backdrop features](https://tailwindcss.com/docs/blur)


# tailwindcss-filters

A plugin that provides utilities for CSS [filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) and [backdrop filters](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter).

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install @jinsung.lim/tailwindcss-filters

# Using Yarn
yarn add @jinsung.lim/tailwindcss-filters
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@jinsung.lim/tailwindcss-filters'),
    // ...
  ],
}
```

## Usage

[**View the live demo**](https://tailwindcss-filters.vercel.app/)

```html
<!-- Filter -->
<img class="filter filter-blur-5 ..." />
<img class="filter filter-bright-50 ..." />
<img class="filter filter-contrast-200 ..." />

<!-- Backdrop Filter -->
<img class="backdrop backdrop-blur-5 ..." />
<img class="backdrop backdrop-bright-50 ..." />
<img class="backdrop backdrop-contrast-200 ..." />
```

More filters & backdrop filters are available.
[**View the live demo**](https://tailwindcss-filters.vercel.app/) to see the full list of provided utilities.
