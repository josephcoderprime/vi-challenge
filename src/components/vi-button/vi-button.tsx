import {
  Component, h, Prop,
} from '@stencil/core';

@Component({
  tag: 'vi-button',
  styleUrl: 'vi-button.css',
  shadow: true,
})
export class ViButton {
  @Prop() text: string;

  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>

    );
  }
}
