const fs = require("fs");
const path = require("path");
const acorn = require("acorn");
const jsx = require("acorn-jsx"); // If JSX support is needed

// Extend acorn with JSX if needed, otherwise use acorn.Parser directly
const Parser = acorn.Parser.extend(jsx());

const folderPath = "../leetcode_150"; // Change this to the folder you want to analyze

// List of standard JavaScript functions (for demonstration, you can extend it)
const standardFunctions = [
  "console.log",
  "Math.max",
  "Math.min",
  "Array.prototype.map",
  "Array.prototype.filter",
  "Array.prototype.reduce",
  "Object.keys",
  "Object.values",
  "setTimeout",
  "setInterval",
  "parseInt",
  "parseFloat",
  "isNaN",
  "isFinite",
];

// Function to parse a single file and find standard function calls
const parseFile = (filePath) => {
  try {
    const code = fs.readFileSync(filePath, "utf-8"); // Read the file's content
    const ast = Parser.parse(code, {
      ecmaVersion: "latest", // Enable latest JavaScript features
      sourceType: "module", // Parse as ES module
    });

    const functionCalls = [];

    // Traverse the AST to find function calls
    acorn.walk.simple(ast, {
      CallExpression(node) {
        const callee = node.callee;

        // Check if the callee is a standard function
        if (
          callee.type === "MemberExpression" &&
          standardFunctions.includes(
            callee.object.name + "." + callee.property.name
          )
        ) {
          functionCalls.push(callee.object.name + "." + callee.property.name);
        } else if (
          callee.type === "Identifier" &&
          standardFunctions.includes(callee.name)
        ) {
          functionCalls.push(callee.name);
        }
      },
    });

    if (functionCalls.length > 0) {
      console.log(`Standard function calls in ${filePath}:`);
      console.log(functionCalls.join(", "));
    }
  } catch (err) {
    console.error(`Failed to parse ${filePath}:`, err.message);
  }
};

// Function to recursively read all files in a folder
const readFolder = (folderPath) => {
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    // Skip `node_modules` folder
    if (file === "node_modules") {
      continue;
    }
    if (fs.lstatSync(filePath).isFile() && filePath.endsWith(".js")) {
      parseFile(filePath);
    } else if (fs.lstatSync(filePath).isDirectory()) {
      readFolder(filePath); // Recursively process subdirectories
    }
  }
};

// Start analyzing the folder
readFolder(folderPath);
