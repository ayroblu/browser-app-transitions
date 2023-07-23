import type { Meta, StoryObj } from "@storybook/react";

import { ImageGallery } from "./ImageGallery.vt";

const meta = {
  component: ImageGallery,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
    controls: { hideNoControlsWarning: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ViewTransitions: Story = {};
