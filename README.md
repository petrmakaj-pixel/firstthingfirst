# QA AI Demo — Automated Checkout Test

A small automated test built with the help of Claude, using Playwright
(the tool mentioned in the Deafcom job listing as a plus). It tests the
login → add to cart → checkout flow on https://www.saucedemo.com/, a
public site built specifically for practicing test automation.

## How to run it locally

1. Install Node.js (v18+) if you don't have it: https://nodejs.org
2. Open a terminal in this folder and run:
   ```
   npm install
   npx playwright install
   ```
3. Run the test:
   ```
   npm test
   ```
4. You'll see a pass/fail result in the terminal. For a visual HTML report:
   ```
   npm run test:report
   ```

## How to describe this in your application

"I used Claude to write and debug a Playwright test that automates a full
login-to-checkout flow on a demo e-commerce site. It was my first time
building something like this — Claude helped me understand the Playwright
API and fix selector issues until the test passed reliably."

That's honest, specific, and shows exactly the kind of AI-assisted
automation work the role is about — without overstating it as more than
it is.
