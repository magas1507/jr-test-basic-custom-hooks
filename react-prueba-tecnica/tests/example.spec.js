// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
const LOCALHOST_URL = 'https://localhost:5173'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});

