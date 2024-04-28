import { MatchData } from "./types";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  generate(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

export default Summary;
