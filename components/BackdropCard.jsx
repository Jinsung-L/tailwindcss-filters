export default function BackdropCard({ filter }) {
  return (
    <div className="relative">
      <div className="aspect-w-1 aspect-h-1">
        <img
          className="object-cover object-center rounded-xl"
          src="https://picsum.photos/200"
          alt="Random photo"
        />
      </div>
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
