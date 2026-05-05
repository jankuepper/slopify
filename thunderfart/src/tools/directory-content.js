import { readdirSync } from "node:fs"
export function cd() {
  const dir = readdirSync("/mnt/Movies", { encoding: 'utf-8', withFileTypes: true })
  const result = dir.map((d) => d.name)
  const response = {
    content: [
      {
        type: "text",
        text: JSON.stringify(result, null, 2)
      }
    ]
  }
  console.log(response)
  return response
}
