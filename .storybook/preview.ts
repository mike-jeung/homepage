import { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks";
import '../src/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      
    },
    viewMode: "docs",
  },
};

export default preview;
