import { MatchData } from "./types";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}

export default Summary;