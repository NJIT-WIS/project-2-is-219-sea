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



test('Nav Bar Test', async ({ page }) => {
  test.setTimeout(50000)
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await page.getByText('I accept').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});
  await page.getByText('Blog').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});
  await page.getByText('About').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});
  await page.getByText('Privacy').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});
  await page.getByText('Subscribe').first().click()
  await page.evaluate(scroll, {direction: "down", speed: "slow"});
})
