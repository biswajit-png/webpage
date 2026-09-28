import "./health.css";

const RING_R = 90;
const RING_C = 2 * Math.PI * RING_R;
const recoveryPct = 0.82;

const ARC_R = 26;
const ARC_C = 2 * Math.PI * ARC_R;
const movePct = 6420 / 8000;

const sleepStages = [
  { h: 22, deep: false },
  { h: 30, deep: false },
  { h: 55, deep: true },
  { h: 70, deep: true },
  { h: 60, deep: true },
  { h: 40, deep: false },
  { h: 35, deep: false },
  { h: 20, deep: false },
];

export default function Health() {
  return (
    <div className="health">
      <div className="board">
        <div className="greeting">
          <h1>Good morning, Asha</h1>
          <span className="date">Sunday, September 28</span>
        </div>

        <div className="grid">
          <div className="recovery">
            <div className="ring-wrap">
              <svg viewBox="0 0 200 200">
                <circle className="ring-track" cx="100" cy="100" r={RING_R} />
                <circle
                  className="ring-value"
                  cx="100"
                  cy="100"
                  r={RING_R}
                  strokeDasharray={RING_C}
                  strokeDashoffset={RING_C * (1 - recoveryPct)}
                />
              </svg>
              <div className="ring-center">
                <strong>82</strong>
                <span>Recovery</span>
              </div>
            </div>
            <p className="recovery-caption">
              Well rested. Your body handled yesterday's training and is
              ready for a harder effort today.
            </p>
          </div>

          <div className="stack">
            <div className="widget sleep">
              <div className="widget-top">
                <h2>Sleep</h2>
                <span className="metric">7h 42m</span>
              </div>
              <div className="sleep-bars">
                {sleepStages.map((stage, i) => (
                  <span
                    key={i}
                    className={stage.deep ? "deep" : undefined}
                    style={{ height: `${stage.h}px` }}
                  />
                ))}
              </div>
              <p className="widget-note">
                2h 05m deep sleep — above your 30-day average.
              </p>
            </div>

            <div className="widget move">
              <div className="widget-top">
                <h2>Movement</h2>
                <span className="metric">6,420 steps</span>
              </div>
              <div className="move-arc">
                <svg viewBox="0 0 64 64">
                  <circle className="move-track" cx="32" cy="32" r={ARC_R} />
                  <circle
                    className="move-value"
                    cx="32"
                    cy="32"
                    r={ARC_R}
                    strokeDasharray={ARC_C}
                    strokeDashoffset={ARC_C * (1 - movePct)}
                  />
                </svg>
                <p className="widget-note" style={{ margin: 0 }}>
                  1,580 steps short of today's goal. An evening walk covers
                  it.
                </p>
              </div>
            </div>
          </div>

          <div className="insight">
            <span className="dot" />
            <p>
              <strong>Ease into today</strong>
              Your heart rate stayed slightly elevated overnight. Nothing
              concerning, but consider a lighter session or an extra rest
              day before your next hard workout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
