# LAKSON Banking Products Dashboard

A responsive, single-page banking products dashboard built with **HTML, CSS and vanilla JavaScript** for the LAKSON assessment.

## Features

- Unified view of four banking product types: Savings, Cards, Loans and Wealth.
- Product cards show product name, category, status, two key metrics and a call-to-action.
- Search by product name, category, status, product ID or description.
- Filter by product category and status.
- Product details modal with a demo action.
- Responsive layout for desktop, tablet and mobile.
- Product data is kept separately in `data.js`; UI behavior is in `app.js`.
- No backend or database required. The assessment allows hard-coded/mock data.

## Project files

```text
lakson-banking-dashboard/
├── index.html   # Page structure
├── styles.css   # Responsive styling
├── data.js      # Mock banking product data
├── app.js       # Search, filters, modal and interactions
└── README.md    # Project documentation
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For a local development server, you can use the VS Code **Live Server** extension:
1. Open the project folder in VS Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

No build step, package installation or API key is needed. Google Fonts are loaded online; the system font will be used if the connection is unavailable.

## Demo data note

All product names, balances, rates, dates and IDs are fictional sample data created only to demonstrate the interface. This is not a real banking service. Buttons display a demo confirmation and do not submit applications, move money or perform financial transactions.

## Technology choices

- **HTML5:** semantic page structure and accessible controls.
- **CSS3:** responsive layout, product cards, status styles and modal.
- **Vanilla JavaScript:** rendering product data, search, category/status filters and interactions.

## GitHub upload instructions

### Create a public repository

1. Sign in at [GitHub](https://github.com/).
2. Click **New repository**.
3. Enter the repository name: `lakson-banking-dashboard`.
4. Add a short description: `Responsive banking products dashboard built with HTML, CSS and JavaScript`.
5. Choose **Public**.
6. Click **Create repository**.

### Upload using the GitHub website

1. Open your newly created repository.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `styles.css`, `data.js`, `app.js` and `README.md` (or drag the project files into the upload area).
4. Add a commit message such as `Add LAKSON banking dashboard assessment`.
5. Click **Commit changes**.

### Submit your public link

Copy the repository URL from your browser. It will look like:

`https://github.com/YOUR-USERNAME/lakson-banking-dashboard`

Make sure the repository visibility is **Public**, then share that URL for the assessment submission.

## Before submitting

- [ ] Open `index.html` and check the page loads.
- [ ] Test each category tab.
- [ ] Test search with a product name such as `Savings`.
- [ ] Test status filter (`Active` and `Pending`).
- [ ] Open a product's **View details** modal and close it.
- [ ] Check the layout on a mobile screen.
- [ ] Confirm all five files are uploaded to a **Public** GitHub repository.
