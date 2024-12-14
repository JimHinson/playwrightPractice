// @ts-check
import { test, expect, type Page } from '@playwright/test';



test.describe('Sign up', () => {


  test('has title', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Contact List App');
    // await expect(page).toHaveTitle()
    // await expect(page).toHaveTitle('/.*Contact');
  });

  test('email', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Click the get started link.
      await page.getByRole('textbox', { name: 'email'}).fill('Jim Hinson')
      await page.getByRole('textbox', { name: 'password'}).fill('')
      await page.getByRole('button', {name: 'Submit'}).click;

      await expect(page).toHaveTitle('Contact List App');

    // await page.getByRole('textbox', {   'email'}).click
    // await page.getByTestId('email').type('Jim Hinson')

    // Expects page to have a heading with the name of Installation.
    // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    // test('Should not allow duplicates', async ({page}) => {
    //   //should not allow duplicates
    //   await page.goto('https://www.gmail.com');
    // });
  })
    // test('Should not allow duplicates', async({ page }) => {

    // })
});
