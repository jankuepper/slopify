import { readdirSync } from "node:fs"
export function cd() {
  const dir = readdirSync(".", { withFileTypes: true })
  console.log(dir)
  return { "diretory-content": dir }
}
