import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors

  get acceptCookiesButton() {
    return this.page.getByRole('button', { name: 'Allow all cookies' }); 
  }

  get empoweringModernFinance() {
    return this.page.getByText('Empowering modern finance');
  }

  get navigationMenu() {
    return this.page.locator('#navbarSupportedContent');
  }

  get solutionsLink() {
    return this.page.getByRole('link', { name: 'Solutions', exact: true });
  }

  get platformLink() {
    return this.page.getByRole('link', { name: 'Platform', exact: true });
  }

  get customersLink() {
    return this.page.getByRole('link', { name: 'Customers', exact: true })
  }

  get resourcesLink() {
    return this.page.getByRole('link', { name: 'Resources', exact: true })
  }

  get aboutUsLink() {
    return this.page.locator('a').filter({ hasText: /^About us$/ })
  }

  get bankingAndCashManagementSolutions() {
    return this.page.getByTitle('Banking and Cash Management');
  }

  get solutionsSection() {
    return this.page.getByRole('main');  
  }

  get privacyPolicyLink() {
    return this.page.locator('a[href="/en/privacy-policy"]');
  }

  get imprintLink() {
    return this.page.locator('a[href="/en/imprint"]');
  }

  get solutionsPage() {
    return this.page.getByRole('heading', { name: 'Purpose-built solutions for' });
  }
  

  // Methods to interact with the page

  async acceptCookies() {

    await this.acceptCookiesButton.click();
  }

  async navigateToSolutions() {
    await this.solutionsLink.click();
  }

  async isSolutionsSectionVisible() {
    return await this.solutionsSection.isVisible();
  }

  async isSolutionsPageSectionVisible() {
    return await this.solutionsPage.isVisible();
  }

  async isEmpoweringModernFinance() {
    return await this.empoweringModernFinance.isVisible();
  }

  async isNavigationMenuVisible() {
    await this.navigationMenu.isVisible();
    await this.solutionsLink.click();
    await this.platformLink.click();  
    await this.customersLink.click();
    await this.resourcesLink.click();
    await this.aboutUsLink.click();
  }

  async accessBankingAndCashManagementSolutions() {
    const logoLink = this.page.locator('#header').getByRole('link', { name: 'Logo Lucanet' });
    if (logoLink) {
      await logoLink.click(); // Reload the page to ensure the latest content is loaded
    }
    await this.bankingAndCashManagementSolutions.isVisible();  // Check if the link is visible
    await this.bankingAndCashManagementSolutions.click();
    await this.page.waitForLoadState('load'); // Wait for the page to load completely
    const currentUrl = await this.page.url(); 
    const expectedUrl = 'https://www.ementexx.com/en'; 
    return currentUrl === expectedUrl; // Verify if the URL matches the expected one
  }

  async isPrivacyPolicyLinkVisibleAndClick() {
    const privacyPolicyLink = this.privacyPolicyLink;  // Select Privacy Policy link
    await expect(privacyPolicyLink).toBeVisible();  // Verify if the link is visible
    await privacyPolicyLink.click(); 
    await this.page.waitForLoadState('load'); // Wait for the page to load completely
    const currentUrl = await this.page.url(); 
    const expectedUrl = 'https://www.ementexx.com/en/privacy-policy'; 
    return currentUrl === expectedUrl; // Verify if the URL matches the expected one 
  }
  
  async isImprintLinkVisibleAndClick() {
    const imprintLink = this.imprintLink;  // Select Imprint link 
    await expect(imprintLink).toBeVisible();  // Verify if the link is visible
    await imprintLink.click(); 
    await this.page.waitForLoadState('load'); // Wait for the page to load completely
    const currentUrl = await this.page.url(); 
    const expectedUrl = 'https://www.ementexx.com/en/imprint'; 
    return currentUrl === expectedUrl;  
  }
}
