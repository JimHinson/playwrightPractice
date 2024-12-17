// @ts-check
import { test, expect, type Page } from '@playwright/test';
import { assert } from 'console';



test.describe('Sign up', () => {


  test('has title', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Contact List App');
    // await expect(page).toHaveTitle()
    // await expect(page).toHaveTitle('/.*Contact');
  });

  
  test.only('email', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Click the get started link.
      await page.getByRole('textbox', { name: 'email'}).fill('Jim Hinson');
      await page.getByRole('textbox', { name: 'password'}).fill('');
      // await page.getByTestId('submit')
      await page.getByRole('button', {name: 'Submit'}).click();

      await expect(page).toHaveTitle('Contact List App');
      // await page.getByTestId('error').click();
      
      //Incorrect username or password
      await expect(page.getByText('Incorrect username or password')).toBeVisible();

      for (let i = 0; i < 5; i++) {
        console.log("i: " + i);
      }
      
      const fruits = ['apple', 'banana', 'cherry'];
      fruits.forEach ((fruit, index /*, array */) => {
        console.log(`Index: ${index}, Fruit: ${fruit}`);
        console.log("Index: " + index + "; Fruit: " + fruit)
        // console.log("array: " + array)
      });
      // fruits.forEach()



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
