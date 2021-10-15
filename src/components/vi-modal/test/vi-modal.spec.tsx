import { newSpecPage } from '@stencil/core/testing';
import { ViModal } from '../vi-modal';

describe('vi-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViModal],
      html: '<vi-modal></vi-modal>',
    });
    expect(page.root).toEqualHtml(`
      <vi-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vi-modal>
    `);
  });
});
