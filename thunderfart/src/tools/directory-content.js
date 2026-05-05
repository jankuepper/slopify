import { readdirSync } from "node:fs"
export function cd() {
  console.log("cd executed!!")
  return { "diretory-content": readdirSync(".", { withFileTypes: true }) }
}
