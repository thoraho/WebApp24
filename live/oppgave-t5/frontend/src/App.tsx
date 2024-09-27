import { useEffect, useState } from "react"
import Grid from "../components/Grid"

function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3000/api/students")
    const data = await response.json()
    console.log(data)
    return data
  }

  useEffect(() => {
    console.clear()
    fetchStudents().then((data) => setStudents(data))
  }, [])

  return (
    <>
      <Grid students={students} />
    </>
  )
}

export default App
