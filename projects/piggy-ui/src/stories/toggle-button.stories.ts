import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ToggleButtonComponent } from '../lib/components/toggle-button/toggle-button.component';
import {
  argsToTemplate,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PiggyUiModule } from '../public-api';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ToggleButtonComponent> = {
  title: 'Example/ToggleButtonComponent',
  component: ToggleButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [],
      imports: [PiggyUiModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`,
    ),
  ],
};

export default meta;
type Story = StoryObj<ToggleButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
