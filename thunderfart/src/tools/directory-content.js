import { readdirSync } from "node:fs"
export function cd() {
  const dir = readdirSync(".", { encoding: 'utf-8', withFileTypes: true })
  const result = dir.map((d) => d.name)
  console.log(result)
  return { "diretory-content": result }
}
