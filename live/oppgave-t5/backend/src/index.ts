import { serve } from "@hono/node-server"
import { readFile } from "fs/promises"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()
app.use("/*", cors())

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.get("/api/students", async (c) => {
  try {
    const response = await readFile("./src/data/students.json")
    return c.json(JSON.parse(response.toString()))
  } catch (error) {
    return c.json({ error: "Finner ikke!" }, 500)
  }
})

app.post("/api/students", async (c) => {
  return c.json({ message: "Student lagt til!" })
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
