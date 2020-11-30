export default function FilterCard({ filter }) {
  return (
    <img
      className={`w-full h-auto rounded-2xl filter ${filter}`}
      src="https://picsum.photos/200"
      alt="Random photo"
    />
  )
}
