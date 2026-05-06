import { readdirSync } from "node:fs"
import { join } from "node:path"

export function cd() {
  const result = readdir("/mnt/Movies", [])
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

function readdir(path, files) {
  const entries = readdirSync(path, { encoding: "utf-8", withFileTypes: true })
  entries.forEach((entry) => {
    const p = join(path, entry.name)
    if (entry.isDirectory()) {
      readdir(p, files)

    } else {
      files.push(p)
    }
  })
  return files
}
