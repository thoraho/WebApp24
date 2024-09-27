import Grid from "./components/Grid"
import Total from "./components/Total"
import { useState } from "react"
import type { Student as StudentProp } from "./components/types"

const initialStudents = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
]

function App() {
  const [students, setStudents] = useState<StudentProp[]>(initialStudents ?? [])

  const onAddStudent = (student: { name: string }) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
  }

  const onDeleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <main>
      {/* <Student name="Marius" id="123" /> */}
      <Grid
        students={students}
        onAddStudent={onAddStudent}
        onDeleteStudent={onDeleteStudent}
      />
      <Total total={students.length} />
    </main>
  )
}

export default App
