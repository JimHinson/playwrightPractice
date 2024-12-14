// @ts-check
import { test, expect, type Page } from '@playwright/test';


//test.describe('Mark all as completed', () => {

test.describe('start', () => {

    test('Open new tab', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/windows');

        const newPagePromise = page.waitForEvent('popup');

        await page.getByRole('link', {name: 'Click Here'}).click();
        
        const newPage = await newPagePromise; 

        // await expect(newPage).toHaveTitle(/New Window/);
    });


    test('should allow me to mark all items as completed', async ({ page }) => {
        // Complete all todos.
        // await page.getByLabel('Mark all as complete').check();

        // Ensure all todos have 'completed' class.
        // await expect(page.getByTestId('todo-item')).toHaveClass(['completed', 'completed', 'completed']);
        // await checkNumberOfCompletedTodosInLocalStorage(page, 3);
    });

});