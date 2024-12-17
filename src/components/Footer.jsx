import { SUMMARY_LABELS } from "../utils";
import { ErrorDisplay } from "./ErrorDisplay";

export function Footer({ weeklySummary, summaryError }) {
  return (
    <footer>
      <div className="footerLabel">
        <h3>
          Podsumowanie <br />
          tygodnia
        </h3>
      </div>
      {!summaryError ? (
        <div className="footerContent">
          {SUMMARY_LABELS.map((label, ix) => (
            <span key={`weeklySummaryKey${ix}`}>
              <b>{label}</b>
            </span>
          ))}
          {Object.values(weeklySummary ?? {}).map((element, ix) => (
            <span key={`weeklySummaryValue${ix}`} className="footerValues">
              {element}
            </span>
          ))}
        </div>
      ) : (
        <ErrorDisplay error={summaryError} />
      )}
    </footer>
  );
}
