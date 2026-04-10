# Expected Value (EV)

Expected Value is the single most important concept in poker. It answers one question: **if I made this exact decision thousands of times, would I make money or lose money on average?**

Every decision at the table — call, fold, raise, check — has an EV. Positive EV (+EV) means profitable over time. Negative EV (-EV) means it costs you money. The goal isn't to win every hand. It's to make +EV decisions consistently and let math do the rest.

---

## The Basic Formula

```
EV = (Probability of Winning × Amount Won) - (Probability of Losing × Amount Lost)
```

That's it. Everything else is just applying this formula to increasingly complex situations.

---

## A Coin Flip Example (No Poker Yet)

Someone offers you a bet: flip a coin. Heads you win $200, tails you lose $100.

```
EV = (50% × $200) - (50% × $100)
   = $100 - $50
   = +$50
```

You should take this bet every single time. You'll lose half the flips, but over time you average **+$50 per flip**. That's edge. That's what Nate Silver's whole book is about — finding spots where the odds are in your favor and pressing them.

> You will lose individual hands playing perfectly. That's not a mistake. A mistake is avoiding +EV spots because losing feels bad.

---

## Your First Poker Example

You're on the river. The pot is **$100**. Your opponent bets **$50** (total pot now $150). You need to call $50 to win $150.

You think you have the best hand **40% of the time**.

```
EV of calling = (40% × $150) - (60% × $50)
              = $60 - $30
              = +$30
```

This is a **profitable call** even though you lose more often than you win. The pot is offering you good enough odds to compensate for being behind.

Now what if you think you only win **20% of the time**?

```
EV of calling = (20% × $150) - (80% × $50)
              = $30 - $40
              = -$10
```

Now it's a fold. Same bet size, same pot — but your read changed the math.

**This is why reads matter.** EV isn't just math in a vacuum. Your estimate of winning probability — informed by position, opponent tendencies, board texture, bet sizing tells — is what makes the formula useful.

---

## Pot Odds: The Shortcut

You don't need to do full EV math at the table. Pot odds give you a quick threshold.

**Pot odds** = what the pot is offering you relative to what you need to risk.

From the example above:
- Pot is $150, you need to call $50
- Pot odds: 150:50 = **3:1**
- You need to win **1 out of 4 times** (25%) to break even

If you think you win more than 25% → call. Less than 25% → fold.

| Pot Odds | Break-Even % | Quick Read |
|----------|-------------|------------|
| 2:1 | 33% | Need to win 1 in 3 |
| 3:1 | 25% | Need to win 1 in 4 |
| 4:1 | 20% | Need to win 1 in 5 |
| 5:1 | 17% | Need to win 1 in 6 |

> **At the table:** glance at the pot, glance at the bet, estimate the ratio. You don't need exact numbers — a rough sense of "am I getting 2:1 or 4:1?" is enough to make good decisions.

---

## Implied Odds: The Hidden EV

Pot odds only account for money already in the pot. **Implied odds** factor in money you expect to win on future streets if you hit your hand.

**Example:** You have 7♠ 8♠ on the flop. Board is 5♠ 6♦ K♣. You need a 4 or 9 for a straight (8 outs).

- Pot is $80, opponent bets $40
- Pot odds: 120:40 = 3:1 → you need 25% equity
- Your actual equity with 8 outs on the flop: ~32% by the river

Pot odds alone say call. But it gets better — if you hit your straight, your opponent likely pays you off because straights are hidden. That extra money you'll extract is your implied odds.

**When implied odds are high:**
- Your hand is disguised (straights, sets)
- Your opponent is a calling station
- Stacks are deep relative to the pot

**When implied odds are low:**
- Obvious draws (four to a flush on board)
- Opponent is tight and will fold to aggression
- Short stacks — not enough behind to win more

---

## EV of Folding Is Always Zero

This is worth stating explicitly. Folding costs you nothing (beyond any money already in the pot). So every decision is really:

> "Is the EV of calling/raising greater than zero?"

If yes → play. If no → fold. Folding is never embarrassing. It's the baseline. You only play when you have a reason to believe the alternative is +EV.

---

## EV of Betting and Raising

Calling is the simplest EV calculation because there's only one outcome branch — you either win or lose the showdown. Betting and raising are more complex because they can win the pot in **two ways**:

1. **Opponent folds** → you win the pot immediately (fold equity)
2. **Opponent calls** → you win at showdown with the best hand

```
EV of a bet = (Fold% × Pot) + (Call% × (Equity × New Pot - Bet Size))
```

This is why aggression is profitable in poker. Even with a mediocre hand, if there's enough fold equity, betting can be +EV when checking or calling would be -EV.

**Doyle Brunson's whole philosophy in a sentence:** put the other guy to the decision. Make *them* figure out if calling is +EV. Pressure is its own form of edge.

---

## Common EV Mistakes at Live Home Games

| Mistake | Why It's -EV | Fix |
|---------|-------------|-----|
| Calling "to see" | Curiosity isn't a reason. The pot needs to justify it. | Do the pot odds check. Takes 2 seconds. |
| Slowplaying monsters | You win a small pot instead of building a big one | Bet your strong hands. Let them pay you off. |
| Bluffing calling stations | Zero fold equity = zero bluff EV | Value bet relentlessly, never bluff them. |
| Folding to small bets | Small bets give you great pot odds | Do the math — you often need <20% equity to call. |
| Chasing without odds | "I might hit my flush" isn't math | Count outs, check pot odds, then decide. |

---

## The Mindset (Silver + Brunson)

Nate Silver frames it as: **find your edge and size your bets accordingly**. Don't overbet small edges. Don't underbet big ones. And most importantly — have the discipline to make the +EV play even when it feels wrong in the moment.

Doyle adds the human element: **your read on the opponent is what makes the probability estimate accurate**. Math without reads is theory. Reads without math is gambling. Together, they're poker.

> Tomorrow night: you don't need to calculate EV at the table. You need to *feel* it. "Am I getting a good price? Is my hand likely best? Will I get paid if I hit?" If the answers point the same direction, you already know the play.

---

## Quick Reference

| Concept | One-liner |
|---------|-----------|
| EV | Average profit/loss of a decision over infinite repetitions |
| +EV | Profitable long-term — take this action |
| -EV | Losing long-term — avoid this action |
| Pot odds | Ratio of pot size to bet size — your break-even threshold |
| Implied odds | Extra money you'll win on later streets if you hit |
| Fold equity | Probability opponent folds to your bet — adds EV to aggression |
| Break-even % | Pot odds converted to a win percentage |

---

*Next up: [Position & Preflop Ranges](./position-and-ranges.md) — where EV starts before the flop is even dealt.*
