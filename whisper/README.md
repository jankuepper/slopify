# whisper

[![Package Version](https://img.shields.io/hexpm/v/whisper)](https://hex.pm/packages/whisper)
[![Hex Docs](https://img.shields.io/badge/hex-docs-ffaff3)](https://hexdocs.pm/whisper/)

```sh
gleam add whisper@1
```
```gleam
import whisper

pub fn main() -> Nil {
  // TODO: An example of the project in use
}
```

Further documentation can be found at <https://hexdocs.pm/whisper>.

## Development

```sh
gleam run   # Run the project
gleam test  # Run the tests
```


## goals:
create ability to run shell command whisper
create types for the whisper command and it's args
create an api for messages (in the beginning only support process.send etc)
create an inner queue for the whisper commands to be executed which is scalable to different amounts of gpus (in the beginning the commands can be stored in an actor for simplicity)

Recommended flow with URL-only input
Validate URL (allow only http/https).
Download to a sandboxed directory with a safe internal filename. STOP THE DOWNLOAD ON CONFIGURED LIMIT!
Check audio type with ffprobe.
Optionally enforce max duration / file size.
Run whisper via a port/executable call, never interpolating user input into a shell string.
Use type-safe enums for options.

This gives you strong security guarantees:

No arbitrary filesystem access
No shell injection
Controlled resource usage
