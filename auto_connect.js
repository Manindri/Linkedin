const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // You can run headless if needed
  const page = await browser.newPage();

  // Replace with your LinkedIn credentials
  const email = 'me6777875@gmail.com';
  const password = 'bluechip123';

  // Navigate to LinkedIn
  await page.goto('https://www.linkedin.com');
  //await browser.close();

  // Log in to LinkedIn
  await page.type('#session_key', email);
  await page.type('#session_password', password);
  try {
    await page.click('#main-content > section.section.min-h-\[560px\].flex-nowrap.pt-\[40px\].babybear\:flex-col.babybear\:min-h-\[0\].babybear\:px-mobile-container-padding.babybear\:pt-\[24px\] > div > div > form > div.flex.justify-between.sign-in-form__footer--full-width > button');
  } catch (error) {
    console.error('Error clicking the button:', error);
  }
  

  // Wait for login and homepage to load
  await page.waitForNavigation();

  // Replace this URL with the LinkedIn profile you want to connect with
  const profileUrl = 'https://www.linkedin.com/in/m-extra-7a72a2299/';

  // Visit the profile and send a connection request
  await page.goto(profileUrl);
  await page.click('.pv-s-profile-actions__connect');
  await page.click('.ml1');


  // Close the browser
  //await browser.close();
})();
