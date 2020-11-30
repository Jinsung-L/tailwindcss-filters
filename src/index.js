const plugin = require('tailwindcss/plugin')

const blurScales = {
  0: '0px',
  1: '1px',
  2: '2px',
  5: '5px',
  10: '10px',
  20: '20px',
  50: '50px',
  100: '100px',
}

const percentScales = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%',
  125: '125%',
  150: '150%',
  175: '175%',
  200: '200%',
  250: '250%',
  300: '300%',
  400: '400%',
}

const hueScales = {
  0: '0deg',
  30: '30deg',
  60: '60deg',
  90: '90deg',
  120: '120deg',
  150: '150deg',
  180: '180deg',
  210: '210deg',
  240: '240deg',
  270: '270deg',
  300: '300deg',
  330: '330deg',
}

const shadowScales = {
  none: '0 0 #0000',
  sm: '0 2px 6px rgba(0, 0, 0, 0.5)',
  DEFAULT: '0 2px 9px rgba(0, 0, 0, 0.5)',
  md: '0 8px 18px rgba(0, 0, 0, 0.5)',
  lg: '0 20px 45px rgba(0, 0, 0, 0.5)',
  xl: '0 40px 75px rgba(0, 0, 0, 0.5)',
  '2xl': '0 50px 150px rgba(0, 0, 0, 0.5)',
}

module.exports = plugin(
  ({ addUtilities, e, theme, variants }) => {
    const filters = theme('filter', {})
    const backdropFilters = theme('backdropFilter', {})

    const filterUtilities = Object.fromEntries(
      Object.entries(filters).flatMap(([filter, values]) =>
        Object.entries(values).map(([key, value]) => {
          const className =
            key === 'DEFAULT' ? `filter-${filter}` : `filter-${filter}-${key}`

          return [
            `.${e(className)}`,
            {
              [`--tw-filter-${filter}`]: value,
            },
          ]
        })
      )
    )

    const backdropUtilities = Object.fromEntries(
      Object.entries(backdropFilters).flatMap(([filter, values]) =>
        Object.entries(values).map(([key, value]) => {
          const className =
            key === 'DEFAULT'
              ? `backdrop-${filter}`
              : `backdrop-${filter}-${key}`

          return [
            `.${e(className)}`,
            {
              [`--tw-backdrop-${filter}`]: value,
            },
          ]
        })
      )
    )

    addUtilities(
      {
        '.filter': {
          '--tw-filter-blur': '0',
          '--tw-filter-bright': '1',
          '--tw-filter-contrast': '1',
          '--tw-filter-shadow': '0 0 #0000',
          '--tw-filter-gray': '0',
          '--tw-filter-hue': '0',
          '--tw-filter-invert': '0',
          '--tw-filter-opacity': '1',
          '--tw-filter-saturate': '1',
          '--tw-filter-sepia': '0',
          filter: [
            'blur(var(--tw-filter-blur))',
            'brightness(var(--tw-filter-bright))',
            'contrast(var(--tw-filter-contrast))',
            'drop-shadow(var(--tw-filter-shadow))',
            'grayscale(var(--tw-filter-gray))',
            'hue-rotate(var(--tw-filter-hue))',
            'invert(var(--tw-filter-invert))',
            'opacity(var(--tw-filter-opacity))',
            'saturate(var(--tw-filter-saturate))',
            'sepia(var(--tw-filter-sepia))',
          ].join(' '),
        },
        ...filterUtilities,
        '.filter-none': {
          filter: 'none',
        },
      },
      variants('filter', [])
    )

    addUtilities(
      {
        '.backdrop': {
          '--tw-backdrop-blur': '0',
          '--tw-backdrop-bright': '1',
          '--tw-backdrop-contrast': '1',
          '--tw-backdrop-shadow': '0 0 #0000',
          '--tw-backdrop-gray': '0',
          '--tw-backdrop-hue': '0',
          '--tw-backdrop-invert': '0',
          '--tw-backdrop-opacity': '1',
          '--tw-backdrop-saturate': '1',
          '--tw-backdrop-sepia': '0',
          'backdrop-filter': [
            'blur(var(--tw-backdrop-blur))',
            'brightness(var(--tw-backdrop-bright))',
            'contrast(var(--tw-backdrop-contrast))',
            'grayscale(var(--tw-backdrop-gray))',
            'hue-rotate(var(--tw-backdrop-hue))',
            'invert(var(--tw-backdrop-invert))',
            'opacity(var(--tw-backdrop-opacity))',
            'saturate(var(--tw-backdrop-saturate))',
            'sepia(var(--tw-backdrop-sepia))',
            'drop-shadow(var(--tw-backdrop-shadow))',
          ].join(' '),
        },
        ...backdropUtilities,
        '.backdrop-none': {
          'backdrop-filter': 'none',
        },
      },
      variants('backdropFilter', [])
    )
  },

  // Default options
  {
    theme: {
      filter: (theme) => ({
        blur: blurScales,
        bright: percentScales,
        contrast: percentScales,
        shadow: shadowScales,
        gray: theme('opacity'),
        hue: hueScales,
        invert: theme('opacity'),
        opacity: theme('opacity'),
        saturate: percentScales,
        sepia: theme('opacity'),
      }),
      backdropFilter: (theme) => ({
        blur: blurScales,
        bright: percentScales,
        contrast: percentScales,
        shadow: shadowScales,
        gray: theme('opacity'),
        hue: hueScales,
        invert: theme('opacity'),
        opacity: theme('opacity'),
        sepia: theme('opacity'),
        saturate: percentScales,
      }),
    },
    variants: {
      filter: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      backdropFilter: [
        'responsive',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
      ],
    },
  }
)
