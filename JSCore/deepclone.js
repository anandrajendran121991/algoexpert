const user = {
  name: "Anand",
  age: 33,
  friends: ["Chotu", "Sandy"],
  address: {
    street: "19 colonial dr",
    city: "Guelph",
    zipcode: "N1L047",
    country: "Canada",
  },
};

function deepClone(value, hash = new Map()) {
  // Handle primitives and functions
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle circular references
  if (hash.has(value)) {
    return hash.get(value);
  }

  // Handle Array
  if (Array.isArray(value)) {
    const arr = [];
    hash.set(value, arr);
    value.forEach((item, i) => {
      arr[i] = deepClone(item, hash);
    });
    return arr;
  }

  // Handle Object
  const obj = {};
  hash.set(value, obj);
  Object.keys(value).forEach((key) => {
    obj[key] = deepClone(value[key], hash);
  });
  return obj;
}

const clonedUser = deepClone(user);
clonedUser.name = "Preeti";

console.log(clonedUser);
console.log(user);
