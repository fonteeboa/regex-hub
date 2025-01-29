import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: ["default", "junit"],
    outputFile: "sonar-reports/sonar-report.xml",
    coverage: {
      reporter: ["text", "json", "lcov"],
      reportsDirectory: "sonar-reports"
    }
  }
});
