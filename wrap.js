const wrap = (line, maxLen) => {
  if (typeof line !== "string" || typeof maxLen !== "number") {
    return "Invalid inputs";
  } else if (!line) {
    return "";
  }
  //if maxLen > line.length,return the line
  else if (maxLen >= line.length) return line;
  //if maxlen < line.length
  return;
};

module.exports = wrap;
