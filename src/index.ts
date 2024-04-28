import { readFileSync } from "fs";

const matches = readFileSync("data/football.csv", {
  encoding: "utf-8",
})
  .split("\n")
  .map((row: string): string[] => row.split(","));

const manUnitedWins = matches.filter(
  (match) =>
    (match[1] === "Man United" && match[5] === "H") ||
    (match[2] === "Man United" && match[5] === "A")
);

console.log("Man United wins: ", manUnitedWins.length);
