import Avatar from "./Avatar"
import { Student as StudentProps } from "./types"

export default function Student(props: StudentProps) {
  const { name = "Student name", id } = props
  return (
    <>
      <article key={id} className="student-card">
        <Avatar name={name} />
        <h2>{name}</h2>
      </article>
    </>
  )
}
