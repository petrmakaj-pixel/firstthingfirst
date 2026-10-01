// Automated end-to-end test for a standard e-commerce checkout flow.
// Target: https://www.saucedemo.com/ — a public demo site built specifically
// for practicing test automation.
//
// This test was written with the help of Claude (Anthropic), then run and
// debugged locally against the real site.

const { test, expect } = require('@playwright/test');

test('standard user can log in, add an item to the cart, and complete checkout', async ({ page }) => {
  // 1. Go to the site and log in with the standard demo account
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Add the first product on the page to the cart
  await page.locator('.inventory_item').first().locator('button').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 3. Go to the cart and start checkout
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  // 4. Fill in shipping details
  await page.fill('[data-test="firstName"]', 'Jan');
  await page.fill('[data-test="lastName"]', 'Novak');
  await page.fill('[data-test="postalCode"]', '11000');
  await page.click('[data-test="continue"]');

  // 5. Finish the order and confirm success
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
