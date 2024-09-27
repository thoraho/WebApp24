export default function Avatar(props: { name: string }) {
  const { name } = props

  const firstLetter = name.split(" ").join("").toUpperCase().slice(0, 1)
  return (
    <>
      <p className="avatar">{firstLetter}</p>
    </>
  )
}
