import { describe, expect, it } from "vitest";
import {
  checkOutsEquityAnswer,
  checkPotOddsAnswer,
  generateCallOrFoldDrill,
  generateDrill,
  generateOutsEquityDrill,
  generatePotOddsDrill,
} from "./game";

describe("generatePotOddsDrill", () => {
  it("generates valid pot odds drills", () => {
    for (let i = 0; i < 50; i++) {
      const drill = generatePotOddsDrill();
      expect(drill.type).toBe("pot-odds");
      expect(drill.potSize).toBeGreaterThan(0);
      expect(drill.betSize).toBeGreaterThan(0);
      expect(drill.correctPercent).toBeGreaterThan(0);
      expect(drill.correctPercent).toBeLessThan(100);
      expect(drill.correctRatio).toMatch(/^\d+:\d+$/);
    }
  });

  it("calculates correct percentage including your call", () => {
    const drill = generatePotOddsDrill();
    const totalWithCall = drill.potSize + drill.betSize + drill.betSize;
    const expected = Math.round((drill.betSize / totalWithCall) * 100 * 10) / 10;
    expect(drill.correctPercent).toBe(expected);
  });
});

describe("generateOutsEquityDrill", () => {
  it("generates valid outs equity drills", () => {
    for (let i = 0; i < 50; i++) {
      const drill = generateOutsEquityDrill();
      expect(drill.type).toBe("outs-equity");
      expect(drill.outs).toBeGreaterThan(0);
      expect(["flop", "turn"]).toContain(drill.street);
      const multiplier = drill.street === "flop" ? 4 : 2;
      expect(drill.correctEquity).toBe(drill.outs * multiplier);
    }
  });
});

describe("generateCallOrFoldDrill", () => {
  it("generates valid call or fold drills", () => {
    for (let i = 0; i < 50; i++) {
      const drill = generateCallOrFoldDrill();
      expect(drill.type).toBe("call-or-fold");
      expect(["call", "fold"]).toContain(drill.correctAnswer);
      if (drill.equity >= drill.potOddsPercent) {
        expect(drill.correctAnswer).toBe("call");
      } else {
        expect(drill.correctAnswer).toBe("fold");
      }
    }
  });
});

describe("generateDrill", () => {
  it("generates one of three drill types", () => {
    const types = new Set<string>();
    for (let i = 0; i < 100; i++) {
      types.add(generateDrill().type);
    }
    expect(types).toContain("pot-odds");
    expect(types).toContain("outs-equity");
    expect(types).toContain("call-or-fold");
  });
});

describe("checkPotOddsAnswer", () => {
  it("accepts answers within tolerance", () => {
    const drill = generatePotOddsDrill();
    expect(checkPotOddsAnswer(drill, drill.correctPercent)).toBe(true);
    expect(checkPotOddsAnswer(drill, drill.correctPercent + 2)).toBe(true);
    expect(checkPotOddsAnswer(drill, drill.correctPercent - 3)).toBe(true);
  });

  it("rejects answers outside tolerance", () => {
    const drill = generatePotOddsDrill();
    expect(checkPotOddsAnswer(drill, drill.correctPercent + 10)).toBe(false);
    expect(checkPotOddsAnswer(drill, drill.correctPercent - 10)).toBe(false);
  });
});

describe("checkOutsEquityAnswer", () => {
  it("accepts answers within tolerance", () => {
    const drill = generateOutsEquityDrill();
    expect(checkOutsEquityAnswer(drill, drill.correctEquity)).toBe(true);
    expect(checkOutsEquityAnswer(drill, drill.correctEquity + 1)).toBe(true);
  });

  it("rejects answers outside tolerance", () => {
    const drill = generateOutsEquityDrill();
    expect(checkOutsEquityAnswer(drill, drill.correctEquity + 10)).toBe(false);
  });
});
