import Head from 'next/head'
import FilterCard from '../../components/FilterCard.jsx'
import Layout from '../../components/Layout.jsx'
import { tailwindConfig, filterDescriptions } from '../../lib/constants'

export default function FilterPage({ filter }) {
  const description = filterDescriptions[filter]

  return (
    <Layout>
      <Head>
        <title>filter-{filter}</title>
      </Head>

      <div className="py-12">
        <h3 className="font-mono text-2xl font-bold">
          {filter === 'none' ? `filter-${filter}` : `filter-${filter}-*`}
        </h3>
        <p className="mt-2 text-lg text-gray-600">{description}</p>
        <div className="grid grid-cols-2 gap-2 mt-8 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {Object.keys(
            tailwindConfig.theme.filter[filter] || { DEFAULT: null }
          ).map((value) => {
            const style =
              value === 'DEFAULT'
                ? `filter-${filter}`
                : `filter-${filter}-${value}`

            return (
              <div key={style} className="flex flex-col">
                <FilterCard filter={style} />
                <code className="py-3 text-sm text-center select-all">
                  {style}
                </code>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(filterDescriptions).map((filter) => ({
    params: { filter },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      filter: params.filter,
    },
  }
}
