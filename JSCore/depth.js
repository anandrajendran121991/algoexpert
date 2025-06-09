let userJson = `
{
    "first_name": "John",
    "email": "abc@gmail.com",
    "favorite_colors": ["blue", "orange"],
    "age":35,
    "adult": true,
    "favorite_team": {
        "name": "Washington Football Team",
        "favorite_player": "Chase Young",
        "city": "Washington DC",
        "nested" : {
            "nested2": {
                "nested3": {
                    "last": "lastvalue"
                }
            }
        }
    }
}
`;

function calcuateDepth() {
  user = JSON.parse(userJson);
  let datapoints = 0;
  for (const [key, value] of Object.entries(user)) {
    datapoints += getDepth(value);
  }

  function getDepth(value) {
    if (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean" ||
      Array.isArray(value)
    ) {
      return 1;
    }

    if (value !== null && typeof value === "object") {
      let count = 0;
      for (const [key, val] of Object.entries(value)) {
        count += getDepth(val);
      }

      return count;
    }
    return 0;
  }

  return datapoints;
}

console.log(calcuateDepth());
