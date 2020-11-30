export default function BackdropCard({ filter }) {
  return (
    <div className="relative">
      <img
        className="object-cover object-center w-full h-full rounded-xl"
        src="https://picsum.photos/200"
        alt="Random photo"
      />
      <div
        className={[
          'absolute inset-1/4 rounded-xl',
          'border-2 border-gray-100',
          'backdrop',
          filter,
        ].join(' ')}
      ></div>
    </div>
  )
}
