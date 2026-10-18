import test, {expect} from "@playwright/test";


test('should be able to add a new todo', async ({page}) => {
    //login
    await page.goto('/login')
    await page.getByTestId('email').fill('user@qacart.com')
    await page.getByTestId('password').fill('Test@1234')
    await page.getByTestId('submit').click()
    
    const welcome = page.getByTestId('welcome')
    await expect(welcome).toBeVisible()
    // add todo
    await page.getByTestId('add').click()
    const todoName = `Learn Playwright ${new Date().getTime()}`
    await page.getByTestId('new-todo-input').fill(todoName)
    await page.getByTestId('submit-todo').click()

    const firstTodo = page.getByTestId('todo-item').first()
    await expect(firstTodo).toHaveText(todoName)
})

test('should be able to delete a todo', async ({page}) => {
    //login
    await page.goto('/login')
    await page.getByTestId('email').fill('user@qacart.com')
    await page.getByTestId('password').fill('Test@1234')
    await page.getByTestId('submit').click()
    
    const welcome = page.getByTestId('welcome')
    await expect(welcome).toBeVisible()
    // add todo
    await page.getByTestId('add').click()
    const todoName = `Learn Playwright ${new Date().getTime()}`
    await page.getByTestId('new-todo-input').fill(todoName)
    await page.getByTestId('submit-todo').click()
    const firstTodo = page.getByTestId('todo-item').first()
    await expect(firstTodo).toHaveText(todoName)
    // search for the new added todo
    const targetedTodo = page.getByTestId('todo-item').filter({hasText: todoName})
    await expect(targetedTodo).toHaveCount(1)
    //delete the added todo
    const deleteButton = firstTodo.getByTestId('delete')
    await deleteButton.click()
    //await expect(firstTodo).not.toContainText(todoName)
    await expect(targetedTodo).toHaveCount(0)
})