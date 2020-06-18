function getScriptName() {
  var error = new Error(),
    source,
    lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/),
    currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);

  if (
    (source = lastStackFrameRegex.exec(error.stack.trim())) &&
    source[1] != ""
  )
    return source[1];
  else if ((source = currentStackFrameRegex.exec(error.stack.trim())))
    return source[1];
  else if (error.fileName != undefined) return error.fileName;
}

const scriptName = getScriptName();

console.log(
  `%c⚔️ ${scriptName}`,
  "font-size:34px; color:#E1BC79;padding: 5px 0 0 5px"
);
console.log(
  `%cCreated with ❤️ by Orel Hassid 🔥`,
  "font-size:14px; color:#3A404C; padding: 5px"
);
console.log(
  "%c                                                                    ",
  "border-top:1px solid #3A404C"
);
