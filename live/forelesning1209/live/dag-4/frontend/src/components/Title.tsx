import { useState } from "react"

type TitleProps = {
  title?: string
}

export default function Title(props: TitleProps) {
  const [username, setUsername] = useState("thoraho")

  const handleUsernameChange = (event: any) => {
    setUsername("UHUHUHUHU")
    if (username === "UHUHUHUHU") {
      setUsername((prev) => prev + "UHUHUHUHU")
    }
  }

  const { title = "Default title" } = props

  return (
    <>
      <h2>{title}</h2>
      <p>{username}</p>
    </>
  )
}
