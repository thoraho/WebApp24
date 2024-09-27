import Student from "./Student"
import type { Student as StudentProp } from "./types"
import AddStudentForm from "./AddStudentForm"

type GridProps = {
  students: StudentProp[]
  onAddStudent: (student: { name: string }) => void
  onDeleteStudent: (id: string) => void
}

export default function Grid(props: GridProps) {
  const { students, onAddStudent, onDeleteStudent } = props

  return (
    <section>
      <article className="grid">
        {students.map((student) => (
          <Student
            key={student.id}
            onDeleteStudent={onDeleteStudent}
            name={student.name}
            id={student.id}
          />
        ))}
      </article>
      <AddStudentForm onAddStudent={onAddStudent} />
    </section>
  )
}
