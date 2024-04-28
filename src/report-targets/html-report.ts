import { writeFileSync } from "fs";
import { OutputTarget } from "../summary";

class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis output</h1>
        <div>${report}</div>
      </div>
    `;

    writeFileSync("report.html", html);
  }
}

export default HtmlReport;
