import { AddStudentForm } from "./Forms"
import Student from "./Student"
import { Student as StudentProps } from "./types"
import { useState } from "react"

type GridProps = {
  students: StudentProps[]
}

export default function Grid(props: GridProps) {
  const { students } = props
  const [studentList, setStudentList] = useState(props.students ?? [])

  return (
    <>
      <section className="student-grid">
        {studentList.map((student: StudentProps) => {
          return (
            <Student key={student.id} name={student.name} id={student.id} />
          )
        })}
      </section>
    </>
  )
}
