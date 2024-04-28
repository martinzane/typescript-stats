import { readFileSync } from "fs";

const matches = readFileSync("data/football.csv", {
  encoding: "utf-8",
})
  .split("\n")
  .map((row: string): string[] => row.split(","));

enum Result {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const manUnitedWins = matches.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === Result.HomeWin) ||
    (match[2] === "Man United" && match[5] === Result.AwayWin)
);

console.log("Man United wins: ", manUnitedWins.length);
