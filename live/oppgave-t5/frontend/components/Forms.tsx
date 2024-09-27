import { useState } from "react"

type AddStudentFormProps = {
  onAddStudent: ({ name }: { name: string }) => void
}

export function AddStudentForm(props: AddStudentFormProps) {
  const { onAddStudent } = props

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name) return
    onAddStudent({ name })
    setName("")
  }
  const [name, setName] = useState("")

  return (
    <form action="" className="add-student-form">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add student</button>
    </form>
  )
}
