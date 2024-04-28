import MatchReader, { MatchResult } from "./match-reader";

const matchReader = new MatchReader("data/football.csv");
matchReader.read();

const manUnitedWins = matchReader.data.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === MatchResult.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
);
console.log(matchReader.data);
console.log("Man United wins: ", manUnitedWins.length);
