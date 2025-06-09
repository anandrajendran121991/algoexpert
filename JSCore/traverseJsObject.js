const framework = {
  name: "pci compliance",
  requirements: [
    {
      id: "pci-1",
      description: "Anand",
    },
    {
      id: "pci-2",
      description: "Anand",
    },
    {
      id: "pci-3",
      description: "Anand",
    },
    {
      id: "pci-4",
      description: "Anand",
    },
  ],
};

//const allComplainces = ["pci-1", "gdpr-1", "soc-1", "pci-2", "pci-3", "pci-4"];

const allComplainces = {
  requirements: [
    {
      cost: 2,
      requirements: ["pci-1", "pci-2"],
    },
    {
      cost: 2,
      requirements: ["pci-3"],
    },
    {
      cost: 3,
      requirements: ["soc-1", "soc-2"],
    },
  ],
};

/**
 * Calculate the percentage in decimal which compliance
 *
 * @param {*} framework
 * @param {*} allComplaince
 * @returns {number} result
 */
function isAllComplaince(framework, allComplainces) {
  const hashMap = new Set();
  for (const { id } of framework.requirements) {
    hashMap.add(id);
  }

  let matched = 0;

  for (const { requirements } of allComplainces["requirements"]) {
    for (const requirement of requirements) {
      if (hashMap.has(requirement)) matched++;
    }
  }

  const result = matched / hashMap.size;
  return parseFloat(result.toFixed(2));
}

console.log(isAllComplaince(framework, allComplainces));

console.log(0, false); // 0 false
console.log(NaN === NaN); // false
console.log({}); // {}
