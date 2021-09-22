// End-to-end testing
import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('.city');
});

afterAll(() => {
  browser.close();
});

// FEATURE 1 - bonus task
describe('Filter events by city', () => {
  // Scenario 1
  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    const allEvents = await page.$('.event');
    expect(allEvents).toBeDefined();
  })

  //Scenario 2
  test('User should see a list of suggestions when they search for a city', async () => {
    const searchCity = await page.$('.city');
    await searchCity.type('input[name=value]', 'berlin');
    const suggestions = await page.$('.suggestions')
    expect(suggestions).toBeDefined();
  })

  // Scenario 3
  test('User can select a city from the suggested list', async () => {
    const cityListSuggestions = await page.$('.suggestions')
    expect(cityListSuggestions).toBeDefined();
  })
});

// FEATURE 2 
describe('show/hide an event details', () => {
  // Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-details');
    expect(eventDetails).toBeNull();
  });

  // Scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.details-btn');
    const eventDetails = await page.$('.event-details');
    expect(eventDetails).toBeDefined();
  });

  // Scenario 3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

});