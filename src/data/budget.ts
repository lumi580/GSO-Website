/**
 * GSO budget request for FY27 (2026–27), as submitted to the Brooklyn College
 * Association on April 29, 2026 ("15. GSO Budget FY27.pdf"). `prior` is the
 * FY26 allocation; `requested` is the FY27 request — not a final allocation.
 */
export const budgetSubmitted = "April 29, 2026";

/** `official` is the BCA form's line name when we show a plainer label. */
export type BudgetLine = {
  code: string;
  label: string;
  official?: string;
  prior: number;
  requested: number;
};

/** Main operating account (BCA account 10167). */
export const mainAccount: BudgetLine[] = [
  { code: "6-22", label: "Club Money", official: "Donations / Grants", prior: 45500, requested: 55127 },
  { code: "6-23", label: "Stipends", prior: 25776, requested: 17350 },
  { code: "—", label: "Administrative Fee", prior: 14973, requested: 16523 },
  { code: "6-05", label: "Social & Cultural Events", prior: 4500, requested: 7000 },
  { code: "6-06", label: "Publicity", prior: 2951, requested: 5000 },
  { code: "6-01", label: "Office Supplies", prior: 0, requested: 2000 },
  { code: "6-19", label: "Awards / Reception", prior: 500, requested: 1000 },
];

/** Summer account (BCA account 77002). */
export const summerAccount: BudgetLine[] = [
  { code: "6-05", label: "Social & Cultural Events", prior: 2400, requested: 2600 },
];

const sum = (lines: BudgetLine[], key: "prior" | "requested") =>
  lines.reduce((total, line) => total + line[key], 0);

export const totals = {
  mainPrior: sum(mainAccount, "prior"), // 94,200
  mainRequested: sum(mainAccount, "requested"), // 104,000
  summerPrior: sum(summerAccount, "prior"), // 2,400
  summerRequested: sum(summerAccount, "requested"), // 2,600
};

export const allPrior = totals.mainPrior + totals.summerPrior;
export const allRequested = totals.mainRequested + totals.summerRequested;

/** Proposed 2026–27 Executive Board stipends (page 3 of the request). */
export const stipends = [
  {
    role: "President",
    annual: 4950,
    duties: [
      "Serves as the chief executive officer of the organization",
      "Oversees all GSO operations, meetings, and organizational functions",
      "Maintains primary responsibility for leadership and administration",
    ],
  },
  {
    role: "Vice President",
    annual: 4200,
    duties: [
      "Supports the President in executive and organizational responsibilities",
      "Assumes presidential duties when necessary",
      "Assists in oversight of committees and organizational operations",
    ],
  },
  {
    role: "Treasurer",
    annual: 4200,
    duties: [
      "Oversees financial operations, budgets, and expenditures",
      "Maintains financial records and accountability",
      "Manages funding requests, purchases, and approvals",
    ],
  },
  {
    role: "Secretary",
    annual: 4000,
    duties: [
      "Maintains records, reports, and meeting minutes",
      "Oversees office organization and administrative operations",
      "Supports the day-to-day functioning of the Executive Board",
    ],
  },
];
