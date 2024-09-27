export type Student = {
  id: string
  name: string
  setStudents?: (students: Student[]) => void
  onDeleteStudent?: (id: string) => void
}
