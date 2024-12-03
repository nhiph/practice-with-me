var intToRoman = function (num) {
  if (num == 0) return "";

  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let res = "";

  for (const [value, symbol] of valueSymbols) {
    let count = Math.floor(num / value);
    res += symbol.repeat(count);
    num = num - count * value;
  }

  return res;
};
