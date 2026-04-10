export type DrillType = "pot-odds" | "outs-equity" | "call-or-fold";

export type PotOddsDrill = {
  type: "pot-odds";
  potSize: number;
  betSize: number;
  correctRatio: string;
  correctPercent: number;
};

export type OutsEquityDrill = {
  type: "outs-equity";
  draw: string;
  outs: number;
  street: "flop" | "turn";
  correctEquity: number;
};

export type CallOrFoldDrill = {
  type: "call-or-fold";
  potSize: number;
  betSize: number;
  draw: string;
  outs: number;
  street: "flop" | "turn";
  equity: number;
  potOddsPercent: number;
  correctAnswer: "call" | "fold";
};

export type Drill = PotOddsDrill | OutsEquityDrill | CallOrFoldDrill;

const DRAWS = [
  { draw: "Flush draw", outs: 9 },
  { draw: "Open-ended straight draw", outs: 8 },
  { draw: "Gutshot straight draw", outs: 4 },
  { draw: "Two overcards", outs: 6 },
  { draw: "Flush draw + gutshot", outs: 12 },
  { draw: "Set (pocket pair on flop)", outs: 2 },
  { draw: "Two pair draw (unpaired hole cards)", outs: 4 },
  { draw: "Open-ended + overcards", outs: 14 },
  { draw: "Flush draw + two overcards", outs: 15 },
  { draw: "Flush draw + open-ended straight", outs: 15 },
] as const;

const POT_SIZES = [40, 60, 80, 100, 120, 150, 200, 250, 300];
const BET_FRACTIONS = [0.25, 0.33, 0.5, 0.66, 0.75, 1.0];

const pick = <T>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

const roundTo = (n: number, decimals: number): number =>
  Math.round(n * 10 ** decimals) / 10 ** decimals;

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const simplifyRatio = (a: number, b: number): string => {
  const d = gcd(Math.round(a), Math.round(b));
  return `${Math.round(a / d)}:${Math.round(b / d)}`;
};

export const generatePotOddsDrill = (): PotOddsDrill => {
  const potSize = pick(POT_SIZES);
  const fraction = pick(BET_FRACTIONS);
  const betSize = Math.round(potSize * fraction);
  const totalPot = potSize + betSize;
  const correctPercent = roundTo((betSize / totalPot) * 100, 1);
  const correctRatio = simplifyRatio(totalPot, betSize);

  return { type: "pot-odds", potSize, betSize, correctRatio, correctPercent };
};

export const generateOutsEquityDrill = (): OutsEquityDrill => {
  const { draw, outs } = pick(DRAWS);
  const street = pick(["flop", "turn"] as const);
  const multiplier = street === "flop" ? 4 : 2;
  const correctEquity = outs * multiplier;

  return { type: "outs-equity", draw, outs, street, correctEquity };
};

export const generateCallOrFoldDrill = (): CallOrFoldDrill => {
  const potSize = pick(POT_SIZES);
  const fraction = pick(BET_FRACTIONS);
  const betSize = Math.round(potSize * fraction);
  const totalPot = potSize + betSize;
  const potOddsPercent = roundTo((betSize / totalPot) * 100, 1);

  const { draw, outs } = pick(DRAWS);
  const street = pick(["flop", "turn"] as const);
  const multiplier = street === "flop" ? 4 : 2;
  const equity = outs * multiplier;

  const correctAnswer = equity >= potOddsPercent ? "call" : "fold";

  return {
    type: "call-or-fold",
    potSize,
    betSize,
    draw,
    outs,
    street,
    equity,
    potOddsPercent,
    correctAnswer,
  };
};

export const generateDrill = (): Drill => {
  const generators = [generatePotOddsDrill, generateOutsEquityDrill, generateCallOrFoldDrill];
  return pick(generators)();
};

export const TOLERANCE = {
  percent: 3,
  equity: 2,
};

export const checkPotOddsAnswer = (drill: PotOddsDrill, answer: number): boolean =>
  Math.abs(answer - drill.correctPercent) <= TOLERANCE.percent;

export const checkOutsEquityAnswer = (drill: OutsEquityDrill, answer: number): boolean =>
  Math.abs(answer - drill.correctEquity) <= TOLERANCE.equity;
