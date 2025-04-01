import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';  

test.describe('Lucanet Homepage Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    // Clears cookies and permissions before each test
    await page.context().clearCookies();
    await page.context().clearPermissions();
  
    // Create a HomePage object and navigate to the homepage
    homePage = new HomePage(page);
    await page.goto('https://www.lucanet.com/en/');  
    await homePage.acceptCookies();
  });

  test('Verify Homepage Content', async () => {
    // Verify the homePage content
    await homePage.isEmpoweringModernFinance(); // Check if the "Empowering Modern Finance" text is visible
    await homePage.isNavigationMenuVisible(); // Check if the navigation menu is visible
    await homePage.accessBankingAndCashManagementSolutions(); 
    await homePage.acceptCookies();
    await homePage.isPrivacyPolicyLinkVisibleAndClick();
    await homePage.isImprintLinkVisibleAndClick();
  });

  test('Verify the Navigation Flow', async ({ page }) => {
    // Verify that the Solutions link redirects or scrolls to the correct section
    await homePage.navigateToSolutions();
    await homePage.isSolutionsSectionVisible();  // Check if the Solutions section is visible
    await expect(homePage.page).toHaveURL(/.*solutions/); 
    await homePage.isSolutionsPageSectionVisible(); // Check if the Solutions page section is visible
  });
});
