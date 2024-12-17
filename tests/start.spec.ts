// @ts-check
import { test, expect, type Page } from '@playwright/test';

const testURL = "https://the-internet.herokuapp.com/windows";

test.beforeEach(async ({ page }) => {
    await page.goto(testURL);
  });

test.describe('start', () => {

    test('Open new tab', async ({page}) => {
        // await page.goto(testURL);

        const newPagePromise = page.waitForEvent('popup');

        await page.getByRole('link', {name: 'Click Here'}).click();
        
        // const newPage = await newPagePromise; 

        await expect(page).toHaveTitle("The Internet");
    });


    test('should allow me to mark all items as completed', async ({ page }) => {
        // const newPagePromise = page.waitForEvent('popup');

        await page.getByRole('link', {name: 'Click Here'}).click();
        // Complete all todos.
        await page.getByLabel('Mark all as complete').check();

        // Ensure all todos have 'completed' class.
        // await expect(page.getByTestId('todo-item')).toHaveClass(['completed', 'completed', 'completed']);
        // await checkNumberOfCompletedTodosInLocalStorage(page, 3);
    });

});