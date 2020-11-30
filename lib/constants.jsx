import resolveConfig from 'tailwindcss/resolveConfig'
import configFile from '../tailwind.config.js'

function OutLink({ href, children }) {
  return (
    <a className="text-blue-500 hover:underline" target="_blank" href={href}>
      {children}
    </a>
  )
}

export const tailwindConfig = resolveConfig(configFile)
export const filterDescriptions = {
  none: 'Use no filter.',
  blur: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur">
        blur() CSS function
      </OutLink>{' '}
      that applies a Gaussian blur to the input element.
    </span>
  ),
  bright: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness">
        brightness() CSS function
      </OutLink>{' '}
      that applies a linear multiplier to the input element, making it appear
      brighter or darker.
    </span>
  ),
  contrast: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast">
        contrast() CSS function
      </OutLink>{' '}
      that adjusts the contrast of the input element.
    </span>
  ),
  shadow: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow">
        drop-shadow()
      </OutLink>{' '}
      CSS function that applies a drop shadow effect to the input element. There
      is an alternative{' '}
      <a
        className="text-blue-500 hover:underline"
        target="_blank"
        href="https://tailwindcss.com/docs/box-shadow"
      >
        Box Shadow utility
      </a>{' '}
      you can use instead.
    </span>
  ),
  gray: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale">
        grayscale() CSS function
      </OutLink>{' '}
      that converts the input element to grayscale.
    </span>
  ),
  hue: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate">
        hue-rotate() CSS function
      </OutLink>{' '}
      that rotates the hue of an element and its contents.
    </span>
  ),
  invert: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert">
        invert() CSS function
      </OutLink>{' '}
      that inverts the color samples in the input element.
    </span>
  ),
  opacity: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity">
        opacity() CSS function
      </OutLink>{' '}
      that applies transparency to the samples in the input element. There is an
      alternative{' '}
      <a
        className="text-blue-500 hover:underline"
        target="_blank"
        href="https://tailwindcss.com/docs/opacity"
      >
        Opacity utility
      </a>{' '}
      you can use instead.
    </span>
  ),
  saturate: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate">
        saturate() CSS function
      </OutLink>{' '}
      that super-saturates or desaturates the input element.
    </span>
  ),
  sepia: (
    <span>
      Use{' '}
      <OutLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia">
        sepia() CSS function
      </OutLink>{' '}
      that converts the input element to sepia, giving it a warmer, more
      yellow/brown appearance.
    </span>
  ),
}
