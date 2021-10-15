import { newE2EPage } from '@stencil/core/testing';

describe('vi-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vi-button></vi-button>');

    const element = await page.find('vi-button');
    expect(element).toHaveClass('hydrated');
  });
});
