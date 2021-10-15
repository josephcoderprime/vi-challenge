import { newSpecPage } from '@stencil/core/testing';
import { ViButton } from '../vi-button';

describe('vi-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViButton],
      html: '<vi-button></vi-button>',
    });
    expect(page.root).toEqualHtml(`
      <vi-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vi-button>
    `);
  });
});
