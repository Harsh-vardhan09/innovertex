import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should display the main heading', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('h2')).toContainText('Host Amazing Hackathons')
  })

  test('should have navigation links', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Hackathons' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible()
  })

  test('should display feature cards', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByText('For Organizers')).toBeVisible()
    await expect(page.getByText('For Participants')).toBeVisible()
    await expect(page.getByText('For Judges')).toBeVisible()
  })

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/')
    
    const startButton = page.getByRole('link', { name: 'Start Your Hackathon' })
    const browseButton = page.getByRole('link', { name: 'Browse Hackathons' })
    
    await expect(startButton).toBeVisible()
    await expect(browseButton).toBeVisible()
    
    // Check that buttons have correct href attributes
    await expect(startButton).toHaveAttribute('href', '/auth/signup')
    await expect(browseButton).toHaveAttribute('href', '/hackathons')
  })
})