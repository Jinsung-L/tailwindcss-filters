import Head from 'next/head'
import Link from 'next/link'

import FilterCard from '../components/FilterCard'
import BackdropCard from '../components/BackdropCard'
import Layout from '../components/Layout'

export default function Home() {
  const filterSamples = [
    ['none', 'none'],
    ['blur', 'blur-5'],
    ['bright', 'bright-50'],
    ['contrast', 'contrast-200'],
    ['gray', 'gray-100'],
    ['hue', 'hue-120'],
    ['invert', 'invert-100'],
    ['opacity', 'opacity-50'],
    ['saturate', 'saturate-300'],
    ['sepia', 'sepia-100'],
    ['shadow', 'shadow-xl'],
  ]

  const hl = (content) => (
    <span className="px-1 py-0.5 rounded bg-green-400 bg-opacity-30">
      {content}
    </span>
  )

  const filterCodeSnippet = (
    <div className="px-8 py-6 bg-gray-800 text-gray-50 rounded-xl">
      <code className="whitespace-pre">
        {`<img class="`}
        <span className="text-green-400">{hl('filter')} filter-blur-5 ...</span>
        {`">\n`}
        {`<img class="`}
        <span className="text-green-400">
          {hl('filter')} filter-bright-50 ...
        </span>
        {`">\n`}
        {`<img class="`}
        <span className="text-green-400">
          {hl('filter')} filter-contrast-200 ...
        </span>
        {`">\n`}
      </code>
    </div>
  )

  const backdropCodeSnippet = (
    <div className="px-8 py-6 bg-gray-800 text-gray-50 rounded-xl">
      <code className="whitespace-pre">
        {`<img class="`}
        <span className="text-green-400">
          {hl('backdrop')} backdrop-blur-5 ...
        </span>
        {`">\n`}
        {`<img class="`}
        <span className="text-green-400">
          {hl('backdrop')} backdrop-bright-50 ...
        </span>
        {`">\n`}
        {`<img class="`}
        <span className="text-green-400">
          {hl('backdrop')} backdrop-contrast-200 ...
        </span>
        {`">\n`}
      </code>
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>tailwindcss-filters examples</title>
      </Head>
      <div className="py-8">
        <h1 className="text-4xl font-bold">tailwindcss-filters examples</h1>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-bold" id="filter">
          <a href="#filter">Filter</a>
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          To enable filters you have to add the{' '}
          <code className="text-purple-500">`filter`</code> utility.
        </p>
        <div className="mt-4">{filterCodeSnippet}</div>
        <div className="grid grid-cols-2 gap-2 mt-6 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {filterSamples.map(([filterName, filterClass]) => (
            <Link key={filterName} href={`/filter/${filterName}`}>
              <a className="flex flex-col group">
                <FilterCard filter={`filter-${filterClass}`} />
                <code className="py-3 text-lg text-center select-all group-hover:underline">
                  {filterName}
                </code>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-bold" id="backdrop">
          <a href="#backdrop">Backdrop</a>
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          To enable backdrops you have to add the{' '}
          <code className="text-purple-500">`backdrop`</code> utility.
        </p>
        <div className="mt-4">{backdropCodeSnippet}</div>
        <div className="grid grid-cols-2 gap-2 mt-6 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {filterSamples.map(([filterName, filterClass]) => (
            <Link key={filterName} href={`/backdrop/${filterName}`}>
              <a className="flex flex-col group">
                <BackdropCard filter={`backdrop-${filterClass}`} />
                <code className="py-3 text-lg text-center select-all group-hover:underline">
                  {filterName}
                </code>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-bold" id="customizing">
          <a href="#customizing">Customizing</a>
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Below is the default configuration for this plugin. For more
          information on how to configure and customize it, refer to{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://tailwindcss.com/docs/configuration"
            target="_blank"
          >
            the official documentation of Tailwind CSS
          </a>
          .
        </p>
        <div className="px-8 py-6 mt-4 bg-gray-800 text-gray-50 rounded-xl">
          <code className="whitespace-pre">
            {`// tailwind.config.js

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

module.exports = {
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
}`}
          </code>
        </div>
      </div>
    </Layout>
  )
}
