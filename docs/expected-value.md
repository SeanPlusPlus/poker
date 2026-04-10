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

## EV Is a *Before* Thing, Not an After Thing

A common misconception: EV is something you calculate after the hand to see if you were "right." It's the opposite. **EV is a decision-making tool. You use it before you act.**

You never know his exact hand. Not preflop, not on the flop, not on the river. You're always operating with incomplete information. EV works *because* of that uncertainty, not despite it.

**You're not betting against his hand. You're betting against his *range*** — the set of all hands he could plausibly have given how he's played so far.

**Example: KQ suited heads up**

Against a random hand, KQs is ~63% — a clear favorite, and getting it in is +EV. But KQs isn't inherently +EV or -EV. It depends on the range you're up against:

| Opponent's Range | Your Equity with KQs | Verdict |
|-----------------|---------------------|---------|
| Random hand | ~63% | Slam dunk +EV |
| Wide open (KJ, QT, suited junk) | ~60% | Very profitable |
| Tight (TT+, AQ+) | ~38% | Marginal at best |
| Only premiums (AA, KK, AK) | ~30% | Get out |

Same cards in your hand. Wildly different EV — because the *range* changed.

**How do you estimate the range?** Everything you've observed:
- **Position** — UTG raise = strong range. Button open = could be anything.
- **Player type** — tight guy who hasn't played a hand in an hour? Narrow. Loose guy on his third beer? Wide.
- **Bet sizing** — unusual sizes often mean unusual hands.
- **Timing** — snap-call usually means draw or medium hand. Long pause then raise usually means strength.

You'll never know if your range estimate was right on any single hand. He might show you a weird bluff or a monster you didn't expect. Doesn't matter. If your range estimate was reasonable and you made the +EV play, **you played it right — even if you lost.**

> **Silver's framing:** You're not trying to be right about *this hand*. You're trying to be right about *this type of situation* over hundreds of hands. One night, one hand — that's noise. Your decision process — that's signal.

The guy who calls your all-in with 7-2 offsuit and rivers a full house? He got lucky. He made a -EV decision that happened to work once. Over a lifetime of poker, that guy goes broke. You don't.

**Post hoc analysis is still useful** — but for calibration, not judgment. "I put him on a tight range but he showed up with J8s — maybe he's wider than I thought." That's learning. That makes your future range estimates more accurate, which makes your future EV calculations better.

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

## Bluffing Is Not -EV. Bad Bluffing Is.

There's a myth that bluffing is gambling — a reckless cowboy move. It's not. A well-constructed bluff is a +EV play backed by math. Here's the formula again:

```
EV of bluff = (Fold% × Pot) - (Call% × Your Bet)
```

Say the pot is $200 and you shove $150. How often does he need to fold?

| He Folds | EV | Verdict |
|---------|-----|---------|
| 60% | (0.6 × $200) - (0.4 × $150) = **+$60** | Clearly profitable |
| 50% | (0.5 × $200) - (0.5 × $150) = **+$25** | Still profitable |
| 43% | Breakeven | **The threshold** |
| 30% | (0.3 × $200) - (0.7 × $150) = **-$45** | Burning money |

He doesn't need to fold most of the time. Just enough. 43% here. That's less than a coin flip.

### Table Image Is an Investment

Picture this: you play absurdly tight for 2.5 hours. Fold, fold, fold. Everyone at the table has noticed. Then you find yourself in a growing pot with J10 — nothing connects, you've got air. You shove.

What does the table see? The tightest player at the table just pushed all in. Their brain screams "he's got it" and they fold.

That's not cowboying. That's **cashing in 2.5 hours of image-building**. Brunson did exactly this — hours of discipline, then one massive play at the right moment. The tight image wasn't passive. It was an investment with a delayed payoff.

### Pick Your Target

The bluff has one critical dependency: **the target must be capable of folding.**

| Target | Fold Equity | Bluff EV |
|--------|------------|----------|
| Tight/thinking player who respects your image | High | +EV |
| Mediocre player who's paying attention | Medium | Depends on sizing |
| Loose calling station on his third beer | Near zero | -EV, don't bother |

Your tight image is a weapon — but it only works on people who are watching. The drunk loose guy calling with middle pair and a vibe? He doesn't care that you've folded for two hours. Value bet him relentlessly, but never bluff him.

> **The rule:** Bluff the players who respect you. Value bet the players who don't.

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
| Range | The set of hands an opponent could have — what you're really playing against |
| Table image | How opponents perceive your play style — a resource you build and spend |

---

*Next up: [Position & Preflop Ranges](./position-and-ranges.md) — where EV starts before the flop is even dealt.*
