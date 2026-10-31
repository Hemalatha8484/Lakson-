// Demo product data is kept separate from the UI for a clean data/UI separation.
const bankingProducts = [
  {
    id: "SAV-2048", name: "Everyday Savings", category: "Savings", status: "Active",
    symbol: "▤", symbolClass: "symbol-savings",
    description: "A flexible savings account for everyday banking and planned goals.",
    metrics: [{ label: "Interest rate", value: "3.25% p.a." }, { label: "Available balance", value: "₹84,250.00" }],
    details: { "Account number": "•••• •••• 2048", "Interest rate": "3.25% p.a.", "Available balance": "₹84,250.00", "Next review": "31 Dec 2026" },
    action: "View details", actionLabel: "View account"
  },
  {
    id: "CRD-7812", name: "Platinum Credit Card", category: "Cards", status: "Active",
    symbol: "▰", symbolClass: "symbol-card",
    description: "A rewards-focused card with flexible spending and secure payments.",
    metrics: [{ label: "Available limit", value: "₹1,20,000" }, { label: "Next due date", value: "12 Nov 2026" }],
    details: { "Card number": "•••• •••• •••• 7812", "Available limit": "₹1,20,000", "Total outstanding": "₹18,450", "Next due date": "12 Nov 2026" },
    action: "View details", actionLabel: "View card"
  },
  {
    id: "LON-3901", name: "Personal Flexi Loan", category: "Loans", status: "Pending",
    symbol: "↗", symbolClass: "symbol-loan",
    description: "A personal loan application with a simple repayment schedule.",
    metrics: [{ label: "Loan amount", value: "₹2,50,000" }, { label: "Interest rate", value: "10.5% p.a." }],
    details: { "Application ID": "LON-3901", "Requested amount": "₹2,50,000", "Interest rate": "10.5% p.a.", "Application status": "Under review" },
    action: "Continue application", actionLabel: "Continue"
  },
  {
    id: "WLT-5620", name: "Growth Wealth Plan", category: "Wealth", status: "Active",
    symbol: "◒", symbolClass: "symbol-wealth",
    description: "A long-term investment plan designed to help build your future wealth.",
    metrics: [{ label: "Portfolio value", value: "₹3,42,800" }, { label: "1Y returns", value: "+8.4%" }],
    details: { "Portfolio ID": "WLT-5620", "Portfolio value": "₹3,42,800", "1Y returns": "+8.4%", "Risk profile": "Moderate" },
    action: "View details", actionLabel: "View portfolio"
  }
];
