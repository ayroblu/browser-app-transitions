import stylingPng from "../stories/assets/styling.png";
import type { Meta, StoryObj } from "@storybook/react";

import { Image, Props } from "./Image";

function ImageWrapper(props: Props) {
  return (
    <div style={{ height: "100px" }}>
      <Image {...props} />
    </div>
  );
}
const meta = {
  component: ImageWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imageSrc: stylingPng,
    aspectRatio: 1,
  },
};
