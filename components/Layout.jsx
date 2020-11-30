export default function Layout({ children }) {
  return (
    <div className="px-6 text-gray-900">
      <div className="max-w-xl py-12 mx-auto divide-y md:max-w-4xl">
        {children}
      </div>
    </div>
  )
}
