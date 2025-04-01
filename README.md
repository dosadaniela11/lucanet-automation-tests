This project contains automated tests for the Lucanet homepage using Playwright and TypeScript. The tests cover various functionalities such as verifying page content, navigation, and ensuring the proper behavior of key links like the Privacy Policy and Imprint.

Approach
Playwright and TypeScript: I used Playwright to interact with the Lucanet homepage and automate the browser actions. TypeScript was used for better type checking and maintainability of the test code.

Page Object Model (POM): I implemented the Page Object Model (POM) design pattern to organize the test scripts and make them more maintainable. Each page on the website has a corresponding class that contains methods to interact with the page and verify the required elements.

Test Assertions: The tests contain assertions to check if the page elements are visible, verify the correct navigation flows, and ensure the correct URLs for links.
