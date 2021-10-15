import { newE2EPage } from '@stencil/core/testing';

describe('vi-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vi-modal></vi-modal>');

    const element = await page.find('vi-modal');
    expect(element).toHaveClass('hydrated');
  });
});
