let a = "first".repeat(10);
let b = "hello world world".replaceAll("world", "there");
let c = "hello".charAt(0); // get the char at pos 0
let d = "heAlo".charCodeAt(2); // get the ascii code for l
let e = [1, 2, 3].includes(20);
let f = String.fromCharCode(97);

console.log("includes:", [1, 2, 3].includes(2)); // true
console.log("indexOf:", "hello".indexOf("l")); // 2
console.log("lastIndexOf:", "hello".lastIndexOf("l")); // 3
console.log("slice:", "hello".slice(1, 4)); // "ell"
console.log("substring:", "hello".substring(1, 4)); // "ell"
console.log("split:", "a,b,c".split(",")); // ["a", "b", "c"]
console.log("trim:", "  hello  ".trim()); // "hello"
console.log("toUpperCase:", "hello".toUpperCase()); // "HELLO"
console.log("toLowerCase:", "HELLO".toLowerCase()); // "hello"
console.log("replace:", "hello world".replace("world", "there")); // "hello there"
console.log("replaceAll:", "a-a-a".replaceAll("a", "b")); // "b-b-b"
console.log("startsWith:", "hello".startsWith("he")); // true
console.log("endsWith:", "hello".endsWith("lo")); // true
console.log("repeat:", "ha".repeat(3)); // "hahaha"
console.log("charAt:", "hello".charAt(1)); // "e"
console.log("charCodeAt:", "A".charCodeAt(0)); // 65
console.log("fromCharCode:", String.fromCharCode(65)); // "A"
console.log("padStart:", "5".padStart(3, "0")); // "005"
console.log("padEnd:", "5".padEnd(3, "0")); // "500"
console.log("localeCompare:", "apple".localeCompare("banana")); // -1
