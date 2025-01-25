/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // push only valid files and folders
  // ignore single .
  // ignore consecutive slashes
  // pop the top of the stack if we see ..

  const stack = [];
  const parts = path.split("/");
  for (const part of parts) {
    if (part === "" || part === ".") {
      continue;
    }

    if (part === "..") {
      stack.length > 0 ? stack.pop() : "";
    } else {
      stack.push(part);
    }
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home"));
