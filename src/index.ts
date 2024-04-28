import CsvFileReader from "./csv-file-reader";
import { Result } from "./types";

const reader = new CsvFileReader("data/football.csv");
reader.read();

const manUnitedWins = reader.data.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === Result.HomeWin) ||
    (match[2] === "Man United" && match[5] === Result.AwayWin)
);
console.log(reader.data);
console.log("Man United wins: ", manUnitedWins.length);
