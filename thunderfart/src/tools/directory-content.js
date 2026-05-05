import { readdirSync } from "node:fs"
export function cd() {
  const dir = readdirSync(".", { encoding: 'utf-8', withFileTypes: true })
  const result = dir.map((d) => d.name)
  const response = { content: result }
  console.log(response)
  return response
}
