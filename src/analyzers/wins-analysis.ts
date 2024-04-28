import { Analyzer } from "../summary";
import { MatchData, MatchResult } from "../types";

class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const numberOfWins = matches.filter(
      (match) =>
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
    ).length;

    return `Team ${this.team} won ${numberOfWins} matches`;
  }
}

export default WinsAnalysis;
