
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button brings up robot cards', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const bots = await driver.findElement(By.id('bot-card outline'))
    const robotsDisplayed = await bots.isDisplayed()
    expect(robotsDisplayed).toBe(true)
})

test('See all button displayed', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    const seeAllDisplayed = await seeAll.isDisplayed()
    expect(seeAllDisplayed).toBe(true)
})