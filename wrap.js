const wrap = (line, maxLen) => {
  if (typeof line !== "string" || typeof maxLen !== "number") {
    return "Invalid inputs";
  } else if (!line) {
    return "";
  }
  //if maxLen > line.length,return the line
  else if (maxLen >= line.length) return line;
  //if maxlen < line.length
  else {
    const indexOfBlank = line.lastIndexOf(" ", maxLen);
    let split;
    let offset;
    if (indexOfBlank > -1) {
      split = indexOfBlank;
      offset = 1;
    } else {
      split = maxLen;
      offset = 0;
    }
    return (
      line.substring(0, split) +
      "\n" +
      wrap(line.substring(split + offset), maxLen)
    );
  }
};

module.exports = wrap;
