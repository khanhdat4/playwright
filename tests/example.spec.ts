// login-local.spec.ts
import { test, expect } from '@playwright/test';

test('Login Test - Successful login', async ({ page }) => {
  await page.goto('/index.php');

  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');
  await page.waitForSelector('input[name="btn_login"]');

  await page.fill('input[name="username"]', 'deha');
  await page.fill('input[name="password"]', 'GKLogistic@2023');

  await page.click('input[name="btn_login"]');

  await page.waitForSelector('a#m-congviec');

  const tasksElement = await page.locator('a#m-congviec');
  expect(await tasksElement.textContent()).toBe('Tasks');
  expect(await tasksElement.getAttribute('title')).toBe('Tasks');
});

test('Login Test - Unsuccessful Login', async ({ page }) => {
    await page.goto('/index.php');
  
    await page.waitForSelector('input[name="username"]');
    await page.waitForSelector('input[name="password"]');
    await page.waitForSelector('input[name="btn_login"]');
  
    await page.fill('input[name="username"]', 'wrong-username');
    await page.fill('input[name="password"]', 'wrong-password');
  
    await page.click('input[name="btn_login"]');
  
    await page.waitForSelector('td.login_error');
  
    const errorElement = await page.locator('td.login_error');
    expect(await errorElement.textContent()).toBe('User/Password not match. Please try again.');
  });

test('when login success, can logout', async ({ page }) => {
  await page.goto('/index.php');
  
  await page.waitForSelector('input[name="username"]');
  await page.waitForSelector('input[name="password"]');
  await page.waitForSelector('input[name="btn_login"]');

  await page.fill('input[name="username"]', 'deha');
  await page.fill('input[name="password"]', 'GKLogistic@2023');

  await page.click('input[name="btn_login"]');

  await page.waitForSelector('a#m-congviec');

  const tasksElement = await page.locator('a#m-congviec');
  expect(await tasksElement.textContent()).toBe('Tasks');

  await page.click('a.top_info_log_out');

  await page.waitForSelector('input[name="username"]');

  const loginElement = await page.locator('input[name="username"]');
  expect(await loginElement.isVisible()).toBe(true);
});

