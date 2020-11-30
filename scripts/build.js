const fs = require('fs')
const resolveConfig = require('tailwindcss/resolveConfig')
const configFile = require('../tailwind.config.js')

const tailwindConfig = resolveConfig(configFile)

const filters = tailwindConfig.theme.filter
const backdropFilters = tailwindConfig.theme.backdropFilter

const filterClasses = Object.entries(filters).flatMap(([filter, values]) =>
  Object.entries(values).map(([key]) => {
    const className =
      key === 'DEFAULT' ? `filter-${filter}` : `filter-${filter}-${key}`

    return className
  })
)

const backdropClasses = Object.entries(backdropFilters).flatMap(
  ([filter, values]) =>
    Object.entries(values).map(([key]) => {
      const className =
        key === 'DEFAULT' ? `backdrop-${filter}` : `backdrop-${filter}-${key}`

      return className
    })
)

const filterList = [
  'filter',
  'filter-none',
  ...filterClasses,
  'backdrop',
  'backdrop-none',
  ...backdropClasses,
].join('\n')

fs.writeFileSync(`./dist/filterList.txt`, filterList)
