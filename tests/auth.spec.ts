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

test('should be able to register', async({page}) => {
  await page.goto('/signup')
  await page.getByTestId('first-name').fill('dali')
  await page.getByTestId('last-name').fill('anen')
  const email = `dali${ new Date().getTime() }@qacart.com`
  await page.getByTestId('email').fill(email)
  await page.getByTestId('password').fill('Dali@1234')
  await page.getByTestId('confirm-password').fill('Dali@1234')
  await page.getByTestId('submit').click()

  const welcome = page.getByTestId('welcome')
  await expect(welcome).toBeVisible()
  await expect(welcome).toHaveText(/to sleep/)
})