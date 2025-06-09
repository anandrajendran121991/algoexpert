let userJson = `
{
    "first_name": "John",
    "email": "abc@gmail.com",
    "favorite_colors": ["blue", "orange"],
    "favorite_team": {
        "name": "Washington Football Team",
        "favorite_player": "Chase Young",
        "city": "Washington DC",
        "another": {
            "one": "Washington Football Team",
            "two": "Chase Young",
            "three": "Washington DC"
        }
    }
}
`;

user = JSON.parse(userJson);

let datapoints = 0;
for (const [key, value] of Object.entries(user)) {
  datapoints += recursive(value);
}

function recursive(value) {
  if (
    typeof value === "string" ||
    typeof value === "boolean" ||
    Array.isArray(value) ||
    typeof value === "number"
  ) {
    return 1;
  }

  let count = 0;
  for (const k in value) {
    count += recursive(value[k]);
  }
  return count;
}
