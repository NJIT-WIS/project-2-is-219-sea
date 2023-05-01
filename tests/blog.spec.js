// @ts-check
const { test } = require('@playwright/test')

let scroll = async (args) => {
  const {direction, speed} = args;
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const scrollHeight = () => document.body.scrollHeight;
  const start = direction === "down" ? 0 : scrollHeight();
  const shouldStop = (position) => direction === "down" ? position > scrollHeight() : position < 0;
  const increment = direction === "down" ? 100 : -100;
  const delayTime = speed === "slow" ? 300 : 10;
  console.error(start, shouldStop(start), increment)
  for (let i = start; !shouldStop(i); i += increment) {
      window.scrollTo(0, i);
      await delay(delayTime);
  }
};



test('Blog Test', async ({ page }) => {
  test.setTimeout(50000)
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000/blog')
  await page.getByText('I accept').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});

  const items = page.locator('main > div > ul > li');
  console.log(items.count())
  for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).locator('a').click();
    await page.evaluate(scroll, {direction: "down", speed: "slow"});
  }  
})
