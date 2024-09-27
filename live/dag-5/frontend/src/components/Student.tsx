import { useState } from "react"
import Avatar from "./Avatar"
import type { Student as StudentProps } from "./types"

export default function Student(props: StudentProps) {
  const { name, id, onDeleteStudent } = props

  const [showRemove, setShowRemove] = useState(false)

  const updateShowState = () => {
    setShowRemove(true)
  }

  return (
    <div
      onMouseOver={updateShowState}
      onMouseLeave={() => setShowRemove(false)}
      className="student"
    >
      {showRemove ? (
        <button
          onClick={() => onDeleteStudent && onDeleteStudent(id)}
          className="delete-btn"
        >
          Slett
        </button>
      ) : null}
      <Avatar name={name} />
      <p className="student-name">{name}</p>
    </div>
  )
}
