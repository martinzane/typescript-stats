import CsvFileReader from "./csv-file-reader";
import MatchReader, { MatchResult } from "./match-reader";

const csvFileReader = new CsvFileReader("data/football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = matchReader.matches.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
);
console.log(matchReader.matches);
console.log("Man United wins: ", manUnitedWins.length);
