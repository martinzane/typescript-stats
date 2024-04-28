import CsvFileReader from "./csv-file-reader";

const reader = new CsvFileReader("data/football.csv");
reader.read();

enum Result {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const manUnitedWins = reader.data.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === Result.HomeWin) ||
    (match[2] === "Man United" && match[5] === Result.AwayWin)
);

console.log("Man United wins: ", manUnitedWins.length);
