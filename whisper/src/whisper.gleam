import command
import gleam/erlang/charlist

pub fn main() -> Nil {
  let command = command.builder()
  let command_charlist = charlist.from_string(command)
  let chars = erlang_os_cmd(command_charlist)
  echo charlist.to_string(chars)
  Nil
}

@external(erlang, "os", "cmd")
fn erlang_os_cmd(command: charlist.Charlist) -> charlist.Charlist
