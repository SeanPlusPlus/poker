import { useCallback, useEffect, useRef, useState } from "react";
import type { Drill } from "./game";
import { checkOutsEquityAnswer, checkPotOddsAnswer, generateDrill } from "./game";

type Result = "correct" | "incorrect" | null;

const formatMoney = (n: number) => `$${n}`;

const DrillPrompt = ({ drill }: { drill: Drill }) => {
  switch (drill.type) {
    case "pot-odds":
      return (
        <div className="prompt">
          <div className="scenario">
            <span className="chip pot">Pot {formatMoney(drill.potSize)}</span>
            <span className="chip bet">Bet {formatMoney(drill.betSize)}</span>
          </div>
          <p className="question">What % equity do you need to call?</p>
        </div>
      );
    case "outs-equity":
      return (
        <div className="prompt">
          <div className="scenario">
            <span className="chip draw">{drill.draw}</span>
            <span className="chip street">
              {drill.street === "flop" ? "On the flop" : "On the turn"}
            </span>
          </div>
          <p className="question">{drill.outs} outs — what's your approximate equity %?</p>
        </div>
      );
    case "call-or-fold":
      return (
        <div className="prompt">
          <div className="scenario">
            <span className="chip pot">Pot {formatMoney(drill.potSize)}</span>
            <span className="chip bet">Bet {formatMoney(drill.betSize)}</span>
            <span className="chip draw">{drill.draw}</span>
            <span className="chip street">
              {drill.street === "flop" ? "On the flop" : "On the turn"}
            </span>
          </div>
          <p className="question">{drill.outs} outs — call or fold?</p>
        </div>
      );
  }
};

const Explanation = ({ drill }: { drill: Drill }) => {
  switch (drill.type) {
    case "pot-odds": {
      const total = drill.potSize + drill.betSize;
      const totalWithCall = total + drill.betSize;
      return (
        <div className="explanation">
          <p>
            Pot after his bet: {formatMoney(total)} — you pay {formatMoney(drill.betSize)}, total
            pot becomes {formatMoney(totalWithCall)}
          </p>
          <p>
            {drill.betSize}/{totalWithCall} = <strong>{drill.correctPercent}%</strong> (ratio:{" "}
            {drill.correctRatio})
          </p>
        </div>
      );
    }
    case "outs-equity": {
      const multiplier = drill.street === "flop" ? 4 : 2;
      return (
        <div className="explanation">
          <p>
            Rule of {drill.street === "flop" ? "4" : "2"}: {drill.outs} outs × {multiplier} ={" "}
            <strong>{drill.correctEquity}%</strong>
          </p>
        </div>
      );
    }
    case "call-or-fold":
      return (
        <div className="explanation">
          <p>
            Equity: ~{drill.equity}% — Need: {drill.potOddsPercent}%
          </p>
          <p>
            {drill.equity >= drill.potOddsPercent
              ? `${drill.equity}% ≥ ${drill.potOddsPercent}%`
              : `${drill.equity}% < ${drill.potOddsPercent}%`}{" "}
            → <strong>{drill.correctAnswer.toUpperCase()}</strong>
          </p>
        </div>
      );
  }
};

export default function App() {
  const [drill, setDrill] = useState<Drill>(generateDrill);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const next = useCallback(() => {
    setDrill(generateDrill());
    setInput("");
    setResult(null);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  const recordResult = useCallback((isCorrect: boolean) => {
    setResult(isCorrect ? "correct" : "incorrect");
    setTotal((t) => t + 1);
    if (isCorrect) {
      setCorrect((c) => c + 1);
      setStreak((s) => {
        const n = s + 1;
        setBestStreak((b) => Math.max(b, n));
        return n;
      });
    } else {
      setStreak(0);
    }
  }, []);

  const handleCallFold = useCallback(
    (choice: "call" | "fold") => {
      if (result !== null) return;
      if (drill.type !== "call-or-fold") return;
      setInput(choice);
      recordResult(choice === drill.correctAnswer);
    },
    [drill, result, recordResult],
  );

  const submit = useCallback(() => {
    if (result !== null) {
      next();
      return;
    }
    if (drill.type === "call-or-fold") return;

    const num = Number.parseFloat(input);
    if (Number.isNaN(num)) return;

    if (drill.type === "pot-odds") {
      recordResult(checkPotOddsAnswer(drill, num));
    } else {
      recordResult(checkOutsEquityAnswer(drill, num));
    }
  }, [drill, input, result, next, recordResult]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") submit();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [submit]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="app">
      <header>
        <h1>♠ Pot Odds Trainer</h1>
        <div className="stats">
          <div className="stat-block">
            <span className="stat-value">
              {correct}/{total}
            </span>
            <span className="stat-label">{accuracy}% accuracy</span>
          </div>
          <div className="stat-block">
            <span className="stat-value">🔥 {streak}</span>
            <span className="stat-label">
              streak{bestStreak > 0 ? ` (best: ${bestStreak})` : ""}
            </span>
          </div>
        </div>
      </header>

      <main>
        <div className={`card ${result ?? ""}`}>
          <div className="drill-type">
            {drill.type === "pot-odds" && "POT ODDS"}
            {drill.type === "outs-equity" && "OUTS → EQUITY"}
            {drill.type === "call-or-fold" && "CALL OR FOLD"}
          </div>

          <DrillPrompt drill={drill} />

          <div className="input-area">
            {drill.type === "call-or-fold" ? (
              <div className="call-fold-buttons">
                <button
                  type="button"
                  className={`btn call ${result !== null && drill.correctAnswer === "call" ? "correct-answer" : ""} ${result === "incorrect" && input === "call" ? "wrong-answer" : ""}`}
                  disabled={result !== null}
                  onClick={() => handleCallFold("call")}
                >
                  CALL ✓
                </button>
                <button
                  type="button"
                  className={`btn fold ${result !== null && drill.correctAnswer === "fold" ? "correct-answer" : ""} ${result === "incorrect" && input === "fold" ? "wrong-answer" : ""}`}
                  disabled={result !== null}
                  onClick={() => handleCallFold("fold")}
                >
                  FOLD ✗
                </button>
              </div>
            ) : (
              <div className="number-input">
                <input
                  ref={inputRef}
                  type="number"
                  inputMode="decimal"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="%"
                  disabled={result !== null}
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="btn submit"
                  onClick={submit}
                  disabled={!input && result === null}
                >
                  {result !== null ? "NEXT →" : "CHECK"}
                </button>
              </div>
            )}
          </div>

          {result !== null && (
            <div className={`feedback ${result}`}>
              <div className="feedback-icon">{result === "correct" ? "✓" : "✗"}</div>
              <Explanation drill={drill} />
            </div>
          )}

          {result !== null && drill.type === "call-or-fold" && (
            <button type="button" className="btn next-btn" onClick={next}>
              NEXT →
            </button>
          )}
        </div>
      </main>

      <footer>
        <p>Enter → submit/next • Drill pot odds, outs→equity, and call/fold decisions</p>
      </footer>
    </div>
  );
}
