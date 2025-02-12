# Playwright + Cucumber Example

This repository contains the base setup of an UI testing project, using Playwright + Cucumber

A simple search in DuckDuckGo to check that results are displayed is used as example

# Requirements

The minimum requirements are:

* node v18.16
* npm 9.5.1

# Setup

1. Download or clone the repository
2. Open a terminal
3. Go to the path of the "package.json" file and execute:

```
npm install
npx playwright install
npx playwright install-deps
```

# Test Execution

To run the tests in headless mode, go to main directory and execute:

```
npm run test
```

# Results

Once the execution (only with 'npm run test') has finished:

A cucumber report will be generated in the '/results/cucumber-report.json' file.

An html report will also be generated in the '/results/cucumber-report.html' file.

# Links
    
[PlayWright](<https://playwright.dev/>)

[Cucumber](<https://cucumber.io/docs/installation/javascript>)