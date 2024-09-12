import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { readFile } from "node:fs/promises"
import type { Context } from "hono"

const app = new Hono()

app.use("*", cors())

app.get("/", async (c: Context) => {
  const data = await readFile("../data/data.json", "utf-8")
  const parsedData = JSON.parse(data)

  console.log(parsedData)

  return c.json(parsedData)
})

app.post("/:id", async (c: Context) => {
  const body = await c.req.json()
})

const port = 3999
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
