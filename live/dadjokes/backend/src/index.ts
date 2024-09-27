import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { readFile, writeFile } from "node:fs/promises"
import { cors } from "hono/cors"

const app = new Hono()

app.use(
  cors({
    origin: "*",
  })
)

app.get("/", async (c) => {
  try {
    const data = await readFile("data/jokes.json", "utf-8")
    const parsedData = JSON.parse(data)
    return c.json(parsedData)
  } catch (error) {
    return c.json({ error: "File not found or could not be read." }, 500)
  }
})

app.post("/", async (c) => {
  const body = await c.req.json()

  try {
    const data = await readFile("data/jokes.json", "utf-8")
    const parsedData = JSON.parse(data)

    parsedData.push(body)

    await writeFile("data/jokes.json", JSON.stringify(parsedData, null, 2))

    return c.json(body, 201)
  } catch (error) {
    return c.json({ error: "Failed to add new joke." }, 500)
  }
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: port,
})
