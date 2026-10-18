import test, { expect } from "@playwright/test";



test('should be able to login', async ({page}) => {
  await page.goto('/login')
  await page.getByTestId('email').fill('user@qacart.com')
  await page.getByTestId('password').fill('Test@1234')
  await page.getByTestId('submit').click()

  const welcome = page.getByTestId('welcome')
  await expect(welcome).toBeVisible()
  await expect(welcome).toHaveText('Time to sleep QAcart')
})