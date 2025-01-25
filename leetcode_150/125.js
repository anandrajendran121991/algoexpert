const isValindrome = (s) => {
  s = s.toLowerCase();
  let alphanumeric = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (
      (charCode >= 48 && charCode <= 57) || // 0-9
      (charCode >= 97 && charCode <= 122) // a-z
    ) {
      alphanumeric += s[i];
    }
  }

  let left = 0;
  let right = alphanumeric.length - 1;
  while (left < right) {
    let leftValue = alphanumeric[left];
    let rightValue = alphanumeric[right];
    if (leftValue !== rightValue) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isValindrome("A man, a plan, a canal: Panama"));
