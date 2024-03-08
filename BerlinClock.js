const BerlinClock = (time) => {
    const [hh, mm, ss] = time.split(":").map(Number);
    return [secondsLevel(ss), ...hoursLevel(hh), ...minutesLevel(mm)].join("\n");
  };
  
const hoursLevel = (hours) => {
    const numberTop = Math.floor(hours / 5);
    const numberBottom = hours % 5;
    return [outputString(4, numberTop, "R"), outputString(4, numberBottom, "R")];
  };
  
  const minutesLevel = (minutes) => {
    const numberTop = Math.floor(minutes / 5);
    const numberBottom = minutes % 5;
    const elements = outputString(11, numberTop, "Y").split("");
    const first = elements
      .map((k, v) => (k === "Y" && v % 3 === 2 ? "R" : k))
      .join("");
    return [first, outputString(4, numberBottom, "Y")];
  };
const secondsLevel = (ss) => (ss % 2 === 0 ? "Y" : "O");
  
const outputString = (arrayLn, numberToFill, letter = undefined) =>
    new Array(arrayLn)
      .fill("O")
      .map((v, i) => (i < numberToFill ? letter : v))
      .join("");
  
module.exports = BerlinClock;
  