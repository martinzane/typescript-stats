import WinsAnalysis from "./analyzers/wins-analysis";
import MatchReader from "./match-reader";
import HtmlReport from "./report-targets/html-report";
import Summary from "./summary";

const matchReader = MatchReader.fromCsv("data/football.csv");
const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

matchReader.load();
summary.generate(matchReader.matches);
